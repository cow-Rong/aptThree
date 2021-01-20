import { Component, OnInit } from '@angular/core';
import * as THREE from 'three';
import Stats from 'three/examples/jsm/libs/stats.module.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader.js';
import { DATA } from '../service/aptData.service';
import TWEEN from '@tweenjs/tween.js';
import { interpolateHsl } from 'd3-interpolate';
// bloom
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';

const basicMat = new THREE.MeshBasicMaterial({
  opacity: 0.25,
  color: 0x1f56b9,
  side: THREE.BackSide,
  transparent: true,
});

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'app-testThree',
  templateUrl: './testThree.component.html',
  styleUrls: ['./testThree.component.css']
})
export class TestThreeComponent implements OnInit {

  container: any;
  stats: any;
  controls: any;
  camera: any;
  scene: any;
  renderer: any;
  light: any;
  ambientLight: any;      // 自然光
  spotLight: any;         // 放射光
  isOpen = false;
  lampTips = '关灯';
  data = DATA;
  animateList: any;
  clock = new THREE.Clock();
  bloomComposer: any;

  constructor() { }

  ngOnInit() {
    this.init();
    this.parseData();
    this.animate();
    // 构建辅助线
    const axesHelper = new THREE.AxesHelper(1000);
    this.scene.add(axesHelper);
    // 网格
    const gridHelper = new THREE.GridHelper(1000, 1000);
    // this.scene.add(gridHelper);
  }

  init() {
    this.scene = new THREE.Scene(); // 场景

    this.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 2000);
    this.camera.position.set(0, 200 * 0.84, 247 * 1.6);

    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true }); // antialias:是否开启反锯齿，设置为true开启反锯齿 //, alpha: true
    this.renderer.setClearAlpha(0x000000, 0);
    this.renderer.setPixelRatio(window.devicePixelRatio); // 我觉得要加
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(this.renderer.domElement);

    this.controls = new OrbitControls(this.camera, this.renderer.domElement);

    // const loader = new THREE.TextureLoader();
    // const bgTexture = loader.load('/assets/3d/background.jpg');
    // this.scene.background = bgTexture;
    // this.scene.background = new THREE.Color(0x4a8be4);
    const light = new THREE.HemisphereLight(0xffffff, 0xcccccc, 1);
    this.scene.add(light);

    // bloom效果
    const renderScene = new RenderPass(this.scene, this.camera);
    const bloomPass = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 1.5, 0.4, 0.85);
    bloomPass.threshold = 0.3;
    bloomPass.strength = 2;
    bloomPass.radius = 0.3;
    this.bloomComposer = new EffectComposer(this.renderer);
    this.bloomComposer.addPass(renderScene);
    this.bloomComposer.addPass(bloomPass);

    // 生成曲线
    const startVec = new THREE.Vector3(50, 0, 0);
    const endVec = new THREE.Vector3(-20, 30, 30);
    // this.generateLine(startVec, endVec, 'y', 10);

    // 添加模型
    const mtlDir = '/assets/3d/第三方系统.mtl';
    const objDir = '/assets/3d/第三方系统.obj';
    const position = new THREE.Vector3(0, 0, 0);
    // this.addObjModel(mtlDir, objDir, position);

    window.addEventListener('resize', this.onWindowResize, false);
  }

  parseData() {
    for (const i in this.data) {
      if (this.data[i].type === 'plant') {
        this.initObject(this.data[i].size, this.data[i].position, this.data[i].bgcolor, this.data[i].opacity, this.data[i].text);
      } else if (this.data[i].type === 'block') {
        this.initObject(this.data[i].size, this.data[i].position, this.data[i].bgcolor, this.data[i].opacity, this.data[i].text);
      } else if (this.data[i].type === 'modele') {

      } else if (this.data[i].type === 'line') {

      }
    }
  }

  // 画多个区域（面）
  initObject(size, position, bgcolor, opacity, text?) {
    const geometry = new THREE.PlaneGeometry(...size);      //
    const material = new THREE.MeshLambertMaterial({       // MeshBasicMaterial 不受光照影响
      color: bgcolor,
      opacity,
      side: THREE.DoubleSide,
      transparent: true
    });  // 双面
    const cube = new THREE.Mesh(geometry, material);
    cube.rotation.x += Math.PI / 2;
    cube.position.set(position[0], position[1], position[2]);
    this.scene.add(cube);
  }

  addObjModel(mtlDir, objDir, position) {
    const objLoader = new OBJLoader(); // obj加载器
    const mtlLoader = new MTLLoader(); // 材质文件加载器
    mtlLoader.load(mtlDir, (materials) => {
      objLoader.setMaterials(materials);
      objLoader.load(objDir, (obj) => {
        obj.position.set(-4.175, 0.9, -5.525);
        obj.scale.set(1, 1, 1);
        obj.rotation.set(0, 0, 0);
        // obj.translateY(-80);
        this.scene.add(obj); // 返回的组对象插入场景中
        // const list = [...this.scene.children[1].children];
        // list.forEach(item => {
        //   this.change2BasicMat(item);
        // });
        // this.animate();
      });
    });
  }

  generateLine(startVec, endVec, dir, distance) {
    let controlVec = startVec;
    let controlVecTwo = endVec;
    switch (dir) {
      case 'x':
        if (!this.distanceJudge(startVec.x, endVec.x, distance)) {
          break;
        }
        if (startVec.x > endVec.x) {
          controlVec = new THREE.Vector3(startVec.x - distance, startVec.y, startVec.z);
          controlVecTwo = new THREE.Vector3(endVec.x + distance, endVec.y, endVec.z);
        } else {
          controlVec = new THREE.Vector3(startVec.x + distance, startVec.y, startVec.z);
          controlVecTwo = new THREE.Vector3(endVec.x - distance, endVec.y, endVec.z);
        }
        break;
      case 'y':
        if (!this.distanceJudge(startVec.y, endVec.y, distance)) {
          break;
        }
        if (startVec.y > endVec.y) {
          controlVec = new THREE.Vector3(startVec.x, startVec.y - distance, startVec.z);
          controlVecTwo = new THREE.Vector3(endVec.x, endVec.y + distance, endVec.z);
        } else {
          controlVec = new THREE.Vector3(startVec.x, startVec.y - distance, startVec.z);
          controlVecTwo = new THREE.Vector3(endVec.x, endVec.y + distance, endVec.z);
        }
        break;
      default:
        if (!this.distanceJudge(startVec.z, endVec.z, distance)) {
          break;
        }
        if (startVec.z > endVec.z) {
          controlVec = new THREE.Vector3(startVec.x, startVec.y, startVec.z - distance);
          controlVecTwo = new THREE.Vector3(endVec.x, endVec.y, endVec.z + distance);
        } else {
          controlVec = new THREE.Vector3(startVec.x, startVec.y, startVec.z - distance);
          controlVecTwo = new THREE.Vector3(endVec.x, endVec.y, endVec.z + distance);
        }
    }
    // const curve = new THREE.QuadraticBezierCurve3(startVec, controlVec, endVec);
    const curve = new THREE.CubicBezierCurve3(startVec, controlVec, controlVecTwo, endVec);

    const geometry = new THREE.TubeBufferGeometry(curve, 20, 5, 8, false);
    this.change2LightTrail(geometry);
  }

  distanceJudge(x, y, distance) {
    return Math.abs(x - y) > 2 * distance;
  }

  change2LightTrail(geometry) {
    // 使用顶点颜色 VertexColors
    const material = new THREE.MeshBasicMaterial({ vertexColors: THREE.VertexColors, side: THREE.BackSide });
    // let geometry = null;
    // if (object3d.geometry) {
    //   geometry = object3d.geometry.clone();
    // } else {
    //   geometry = object3d.clone();
    // }
    // 生成渐变色的color数组
    const count = geometry.attributes.position.count;
    const rgbInterpolate = interpolateHsl('#00ffff', '#000000');
    const colorArray = new Array(count);
    for (let index = 0; index < count; index++) {
      const t = index / count;
      const rgb = rgbInterpolate(t);
      const rgbValue = rgb.match(/\d+/g);
      // 从 "rgb(1,2,3)" 字符串里 提取出 1,2,3 并 归一化（ 0.0 ~ 1.0）
      const r = Number(rgbValue[0]) / 255;
      const g = Number(rgbValue[1]) / 255;
      const b = Number(rgbValue[2]) / 255;

      colorArray[3 * index] = r;
      colorArray[3 * index + 1] = g;
      colorArray[3 * index + 2] = b;
    }

    // const anchor = Number((Math.random() * count).toFixed(0));
    // const b = colorArray.slice(anchor * 3);
    // const f = colorArray.slice(0, anchor * 3);
    // const newColorArray = [].concat(b, f);

    geometry.setAttribute('color', new THREE.Float32BufferAttribute(colorArray, 3));
    const mesh = new THREE.Mesh(geometry, material);
    // mesh.position.set(object3d.position.x, object3d.position.y, object3d.position.z);
    // mesh.rotation.set(object3d.rotation.x, object3d.rotation.y, object3d.rotation.z);
    // mesh.scale.set(object3d.scale.x, object3d.scale.y, object3d.scale.z);
    // if (object3d.parent) {
    //   object3d.parent.add(mesh);
    // } else {
    this.scene.add(mesh);
    // }
    setInterval(() => {
      this.lightMove(mesh, colorArray);
    }, 2000);
  }

  // 颜色变化
  lightMove(mesh, colorArray) {
    const len = colorArray.length / 3;
    new TWEEN.Tween({ value: 0 })
      .to({ value: 1 }, 2000)
      .onUpdate((val) => {
        // 实现环状数组变化
        const anchor = Number((val.value * len).toFixed(0));
        const b = colorArray.slice(anchor * 3);
        const f = colorArray.slice(0, anchor * 3);
        const newColorArray = [].concat(b, f);
        mesh.geometry.setAttribute('color', new THREE.Float32BufferAttribute(newColorArray, 3));
      })
      .start();
  }

  change2BasicMat(object3d) {
    object3d.traverse(item => {
      if (item.material) {
        item.material = basicMat;
      }
    });
  }

  handleProgress(progressEvent) {
    console.log('handleProgress', progressEvent.loaded, progressEvent.total);
    document.getElementById('loadingText').innerText = `加载模型中:${(progressEvent.loaded / progressEvent.total * 100).toFixed(0)}%`;
  }

  onWindowResize() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  animate = () => {
    const delta = this.clock.getDelta();
    TWEEN.update();
    // this.animateList.forEach(mixer => {
    //   mixer.update(delta);
    // });

    // this.bloomComposer.render();
    requestAnimationFrame(this.animate);
    // this.renderer.clear();
    this.renderer.render(this.scene, this.camera);
    // this.stats.update();
  }

  // // 定义灯光
  // initLight() {
  //   this.ambientLight = new THREE.AmbientLight(0xffffff, 1);
  //   this.scene.add(this.ambientLight);
  //   this.spotLight = new THREE.SpotLight(0xffffff, 1);
  //   this.spotLight.position.set(0, 10, 0);
  //   this.spotLight.castShadow = true;
  //   this.scene.add(this.spotLight);
  // }

  // // 控制灯光
  // openLamp() {
  //   this.isOpen = !this.isOpen;
  //   if (this.isOpen) {
  //     this.ambientLight.intensity = 0.0;
  //     this.spotLight.intensity = 0.0;
  //     this.lampTips = '开灯 ';
  //   } else {
  //     this.ambientLight.intensity = 1.0;
  //     this.spotLight.intensity = 1.0;
  //     this.lampTips = '关灯 ';
  //   }

  // }

  // changeColor(carFbx, carPaintArr) {
  //   // 定义一种颜色
  //   const trueColor = {
  //     r: 1,
  //     g: 0.0784313753247261,
  //     b: 0.6196078658103943
  //   };
  //   const lightColor = {
  //     r: 0.0784313753247261,
  //     g: 0.0784313753247261,
  //     b: 0.6196078658103943
  //   };
  //   let index = 0;
  //   for (let i = 0; i < carFbx.children.length; i++) {

  //     if (!!carPaintArr[index] && i === carPaintArr[index][0]) {

  //       // 从这里得到所有的修改列表
  //       const item = carPaintArr[index];
  //       const changeNumber = item[0];
  //       // if (!item[2]) {
  //       carFbx.children[changeNumber].material.color.r = trueColor.r;
  //       carFbx.children[changeNumber].material.color.g = trueColor.g;
  //       carFbx.children[changeNumber].material.color.b = trueColor.b;
  //       carFbx.children[changeNumber].material.emissive.r = lightColor.r;
  //       carFbx.children[changeNumber].material.emissive.g = lightColor.g;
  //       carFbx.children[changeNumber].material.emissive.b = lightColor.b;
  //       // } else {
  //       //   const element = carFbx.children[changeNumber].material;
  //       //   // tslint:disable-next-line: prefer-for-of
  //       //   for (let j = 0; j < element.length; j++) {
  //       //     if (element[j].name === item[2]) {
  //       //       element[j].color.r = trueColor.r;
  //       //       element[j].color.g = trueColor.g;
  //       //       element[j].color.b = trueColor.b;
  //       //     }
  //       //   }

  //       // }
  //       index++;
  //     }

  //   }
  // }
}
