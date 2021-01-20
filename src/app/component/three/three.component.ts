import { Component, OnInit, ElementRef } from '@angular/core';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { DATA } from '../service/threeJson.service';
// import * as $ from '../../../assets/inflate.min.js';
// import {FBXLoader } from '../../../assets/FBXLoader.js';
// declare const THREE: any;
// declare const FBXLoader: any ;


@Component({
    selector: 'app-three',
    templateUrl: './three.component.html',
    styleUrls: ['./three.component.styl']
})
export class ThreeComponent implements OnInit {
    times = 0;
    scene: any;
    camera: any;
    renderer: any;
    geometry: any;
    material: any;
    cube: any;
    canvas: any;
    count = 1;
    width: any;
    height: any;
    ambientLight: any;      // 自然光
    spotLight: any;         // 放射光
    mouse: any;
    raycaster: any;
    data = DATA;
    // data = JSON.parse(window.localStorage.getItem('11')) || DATA;
    isOpen = false;
    lampTips = '关灯';


    constructor(private el: ElementRef) { }

    ngOnInit() {
        this.width = document.getElementById('canvas').clientWidth;
        this.height = document.getElementById('canvas').clientHeight;
        this.initRenderer();
        this.initScene();
        this.initCamera();
        const controls = new OrbitControls(this.camera, this.renderer.domElement); // 控制放大缩小
        this.dealJson();
        this.initLight();
        this.animate();
        // 构建辅助线
        const axesHelper = new THREE.AxesHelper(10);
        // this.scene.add(axesHelper);
        // 网格
        const gridHelper = new THREE.GridHelper(100, 100);
        // this.scene.add(gridHelper);
        this.attackAnimate();
    }

    // 定义场景
    initScene() {
        this.scene = new THREE.Scene(); // 场景

    }
    // 定义相机
    initCamera() {
        this.camera = new THREE.PerspectiveCamera(75, this.width / this.height, 0.1, 1000);
        this.camera.position.set(15, 15, 15);
    }
    // 定义渲染器
    initRenderer() {
        this.renderer = new THREE.WebGLRenderer({
            antialias: true      // 抗锯齿
        });
        this.renderer.setSize(this.width, this.height);
        this.renderer.setClearColor('#09152d', 1.0);
        document.getElementById('canvas').appendChild(this.renderer.domElement);
    }
    // 定义灯光
    initLight() {
        this.ambientLight = new THREE.AmbientLight(0xffffff, 1);
        this.scene.add(this.ambientLight);
        this.spotLight = new THREE.SpotLight(0xffffff, 1);
        this.spotLight.position.set(0, 10, 0);
        this.spotLight.castShadow = true;
        this.scene.add(this.spotLight);
    }

    // 控制灯光
    openLamp() {
        this.isOpen = !this.isOpen;
        if (this.isOpen) {
            this.ambientLight.intensity = 0.0;
            this.spotLight.intensity = 0.0;
            this.lampTips = '开灯 ';
        } else {
            this.ambientLight.intensity = 1.0;
            this.spotLight.intensity = 1.0;
            this.lampTips = '关灯 ';
        }

    }
    // 画多个区域（面）
    initObject(size, position, bgcolor, type) {
        const geometry = new THREE.PlaneGeometry(...size);      //
        const material = new THREE.MeshLambertMaterial({       // MeshBasicMaterial 不受光照影响
            color: bgcolor,
            opacity: type === 'area' ? 0.7 : 0.5,
            side: THREE.DoubleSide,
            transparent: true
        });  // 双面
        const cube = new THREE.Mesh(geometry, material);
        cube.rotation.x += type === 'area' ? Math.PI * 2 / 4 : 0;
        cube.position.set(position[0], position[1], position[2]);
        this.scene.add(cube);
    }

    // 画线
    drawLines(from, to) {
        const geometry = new THREE.Geometry();
        const material = new THREE.MeshLambertMaterial({ color: 0x00ffe5 });
        geometry.vertices.push(new THREE.Vector3(from[0], from[1], from[2]));
        geometry.vertices.push(new THREE.Vector3(to[0], to[1], to[2]));
        const line = new THREE.Line(geometry, material);
        this.scene.add(line);
    }

    // 画立方体
    drawCube(size, position, bgcolor, opacity, type) {
        const geometry = new THREE.BoxGeometry(...size);
        const material = new THREE.MeshLambertMaterial({
            color: bgcolor,
            opacity: opacity || 0.7,
            side: THREE.DoubleSide, // THREE.FrontSide 正面，THREE.BackSide 反面，THREE.DoubleSide 双面
            transparent: true,
            wireframe: false           // 是否渲染线而非面 默认false
        });
        const cube = new THREE.Mesh(geometry, material);
        cube.position.set(position[0], position[1], position[2]);
        this.scene.add(cube);
        if (type === 'switchesBig' || type === 'switchesSmall') {
            const x = size[0];
            const y = size[1];
            const group = new THREE.Group();
            // 画外层立方体
            const geometry1 = new THREE.BoxGeometry(x * 0.8, x * 0.8, x * 0.8);
            const material1 = new THREE.MeshLambertMaterial({
                color: 0x2449ba,
                opacity: 0.4,
                side: THREE.DoubleSide, // THREE.FrontSide 正面，THREE.BackSide 反面，THREE.DoubleSide 双面
                transparent: true,
                wireframe: false           // 是否渲染线而非面 默认false
            });
            const cube1 = new THREE.Mesh(geometry1, material1);
            cube1.position.set(position[0], y / 2 + x * 0.8 / 2, position[2]);
            group.add(cube1);
            // 画内层立方体
            const geometry2 = new THREE.BoxGeometry(x * 0.6, x * 0.6, x * 0.6);
            const material2 = new THREE.MeshLambertMaterial({
                color: 0x01ffe6,
                opacity: 0.7,
                side: THREE.DoubleSide, // THREE.FrontSide 正面，THREE.BackSide 反面，THREE.DoubleSide 双面
                transparent: true,
                wireframe: false           // 是否渲染线而非面 默认false
            });
            const cube2 = new THREE.Mesh(geometry2, material2);
            cube2.position.set(position[0], y / 2 + x * 0.6 / 2, position[2]);
            group.add(cube2);
            // 画点
            const positionArr = [
                [position[0] - x * 0.8 / 2, y / 2 + x * 0.8 / 2 + x * 0.8 / 2, position[2] + x * 0.8 / 2],
                [position[0] - x * 0.8 / 2, y / 2 + x * 0.8 / 2 + x * 0.8 / 2, position[2] - x * 0.8 / 2],
                [position[0] + x * 0.8 / 2, y / 2 + x * 0.8 / 2 + x * 0.8 / 2, position[2] + x * 0.8 / 2],
                [position[0] + x * 0.8 / 2, y / 2 + x * 0.8 / 2 + x * 0.8 / 2, position[2] - x * 0.8 / 2]
            ];
            for (const i in positionArr) {
                if (i) {
                    const geometry3 = new THREE.SphereGeometry(0.06, 32, 32);           // 球体
                    const material3 = new THREE.MeshLambertMaterial({
                        color: 0x01ffe6,
                        side: THREE.DoubleSide, // THREE.FrontSide 正面，THREE.BackSide 反面，THREE.DoubleSide 双面\
                    });
                    const point = new THREE.Mesh(geometry3, material3);
                    point.position.set(positionArr[i][0], positionArr[i][1], positionArr[i][2]);
                    group.add(point);
                }
            }
            // 画上方的发光面
            const positionPlane = [
                [position[0], y / 2 + x * 0.6 / 2 + x, position[2] + 0.3 * x],
                [position[0], y / 2 + x * 0.6 / 2 + x, position[2] + 0.3 * x - 0.6 * x],
                [position[0] + 0.3 * x, y / 2 + x * 0.6 / 2 + x, position[2] + 0.3 * x - 0.3 * x],
                [position[0] + 0.3 * x - 0.6 * x, y / 2 + x * 0.6 / 2 + x, position[2] + 0.3 * x - 0.3 * x]
            ];
            for (const i in positionPlane) {
                if (i) {
                    const canvas = document.createElement('canvas');
                    const ctx = canvas.getContext('2d');
                    canvas.width = 20;
                    canvas.height = 40;
                    const change = ctx.createLinearGradient(0, 0, 20, 40);
                    ctx.strokeStyle = 'rgba(255, 255, 255, 0)';
                    change.addColorStop(1, 'rgba(1, 255, 230, 0.6)');
                    change.addColorStop(0, 'rgba(1, 255, 230, 0)');
                    ctx.fillStyle = change;
                    ctx.rect(0, 0, 20, 40);
                    ctx.fill();
                    ctx.stroke();
                    const texture = new THREE.CanvasTexture(canvas);
                    const textGeoMetry = new THREE.PlaneGeometry(x * 0.6, 1.2 * x);
                    const mesh = new THREE.Mesh(textGeoMetry, new THREE.MeshPhongMaterial({
                        map: texture,
                        side: THREE.DoubleSide,
                        transparent: true,
                        opacity: 1
                    }));
                    if (i === '2' || i === '3') {
                        mesh.rotation.y += Math.PI / 2;
                    }
                    mesh.position.set(positionPlane[i][0], positionPlane[i][1], positionPlane[i][2]);
                    group.add(mesh);
                }
            }
            this.scene.add(group);
        }
    }

    // 处理数据
    dealJson() {
        for (const i in this.data) {
            if (this.data[i].type === 'line') {
                this.drawLines(this.data[i].from, this.data[i].to);
            } else if (this.data[i].type === 'area' || this.data[i].type === 'surface') {
                this.initObject(this.data[i].size, this.data[i].position, this.data[i].bgcolor, this.data[i].type);
            } else if (this.data[i].type === 'web') {
                // let mixer = null; // 声明一个混合器变量
                // const fbxloader = new THREE.FBXLoader(); // 创建一个FBX加载器
                // fbxloader.load('./assets/topo/components.FBX', (obj) => {
                //     console.log(obj); // 查看加载后返回的模型对象
                //     this.scene.add(obj);
                //     // 查看动画数据  2个剪辑对象AnimationClip，一个有关键帧动画，一个没有
                //     console.log(obj.animations);
                //     // 适当平移fbx模型位置
                //     obj.translateY(-80);
                //     // obj作为参数创建一个混合器，解析播放obj及其子对象包含的动画数据
                //     mixer = new THREE.AnimationMixer(obj);
                //     // 查看动画数据
                //     console.log(obj.animations)
                //     // obj.animations[0]：获得剪辑对象clip
                //     const AnimationAction = mixer.clipAction(obj.animations[0]);
                //     // AnimationAction.timeScale = 1; //默认1，可以调节播放速度
                //     // AnimationAction.loop = THREE.LoopOnce; //不循环播放
                //     // AnimationAction.clampWhenFinished=true;//暂停在最后一帧播放的状态
                //     AnimationAction.play(); // 播放动画
                // });
                const group = new THREE.Group();
                // 画网站---云朵
                const heartShape = new THREE.Shape();
                heartShape.arc(0, this.data[i].radius, this.data[i].radius, -Math.PI / 2, Math.PI / 2, true);
                heartShape.arc(this.data[i].radius, 0, this.data[i].radius, Math.PI, 0, true);
                heartShape.arc(0, -this.data[i].radius, this.data[i].radius, Math.PI / 2, -Math.PI / 2, true);
                const geometry = new THREE.ExtrudeGeometry(heartShape,
                    { bevelEnabled: false, depth: 0.5 });
                const mesh = new THREE.Mesh(geometry, new THREE.MeshPhongMaterial({
                    color: 0x01ffe6
                }));
                mesh.position.set(this.data[i].position[0], this.data[i].position[1], this.data[i].position[2]);
                group.add(mesh);
                // 画网站---logo
                const canvas = document.createElement('canvas');
                const ctx = canvas.getContext('2d');
                canvas.width = 40;
                canvas.height = 40;
                ctx.lineWidth = 1;
                ctx.strokeStyle = '#000000';
                ctx.beginPath();
                ctx.arc(20, 20, 10, 0, 2 * Math.PI);
                ctx.stroke();
                ctx.beginPath();
                ctx.moveTo(10, 20);
                ctx.lineTo(30, 20);
                ctx.stroke();
                ctx.beginPath();
                ctx.moveTo(20, 10);
                ctx.lineTo(20, 30);
                ctx.stroke();
                ctx.beginPath();
                ctx.arc(20, 20 + Math.sqrt(200), 10, - 3 * Math.PI / 4, - Math.PI / 4, false);
                ctx.stroke();
                ctx.beginPath();
                ctx.arc(20, 20 - Math.sqrt(200), 10, Math.PI / 4, 3 * Math.PI / 4, false);
                ctx.stroke();
                ctx.beginPath();
                ctx.arc(10, 20, Math.sqrt(200), Math.PI / 4, - Math.PI / 4, true);
                ctx.stroke();
                ctx.beginPath();
                ctx.arc(30, 20, Math.sqrt(200), Math.PI * 3 / 4, Math.PI * 5 / 4, false);
                ctx.stroke();
                const textTexture = new THREE.CanvasTexture(canvas);
                textTexture.minFilter = THREE.LinearFilter;
                const textGeoMetry = new THREE.PlaneGeometry(2, 2);
                const textPlane = new THREE.Mesh(textGeoMetry, new THREE.MeshPhongMaterial({
                    map: textTexture,
                    side: THREE.DoubleSide,
                    transparent: true,
                    opacity: 1
                }));
                textPlane.position.set(this.data[i].position[0] + 0.5, this.data[i].position[1] + 0.6, this.data[i].position[2] + 0.52);
                group.add(textPlane);
                this.scene.add(group);
            } else if (this.data[i].type === 'attacker') {
                const geometry = new THREE.SphereGeometry(0.1, 32, 32);           // 球体
                const material = new THREE.MeshLambertMaterial({
                    color: 0xffffff,
                    side: THREE.DoubleSide, // THREE.FrontSide 正面，THREE.BackSide 反面，THREE.DoubleSide 双面\
                });
                const ball = new THREE.Mesh(geometry, material);
                ball.position.set(this.data[i].value[0].path[0][0], this.data[i].value[0].path[0][1], this.data[i].value[0].path[0][2]);
                ball.name = 'attacker';
                ball.userData.path = this.data[i].value[0].path;
                ball.userData.nextIndex = 1;
                this.scene.add(ball);
                console.log('-------------', ball.position);
            } else {
                this.drawCube(this.data[i].size, this.data[i].position, this.data[i].bgcolor, this.data[i].opacity, this.data[i].type);

            }
        }
        // 用threejs 自带的方法 画3d 字 需要引入 文件 加载较慢
        const loader = new THREE.FontLoader();
        loader.load('assets/STFangsong_Regular.json', fonts => {
            for (const i in this.data) {
                if (this.data[i].type === 'area' && this.data[i].text.length > 0) {
                    const geometry = new THREE.TextGeometry(this.data[i].text, {   // this.data[i].text
                        font: fonts,
                        size: 0.8,
                        height: 0.1
                    });
                    const meshMaterial = new THREE.MeshLambertMaterial({
                        opacity: 0.9,
                        color: 0x01ffe6
                    });
                    const font = new THREE.Mesh(geometry, meshMaterial);
                    font.position.set(this.data[i].position[0] - 2, this.data[i].position[1] - 0.5,
                        this.data[i].position[2] + this.data[i].size[1] * 0.52);
                    this.scene.add(font);
                } else if (this.data[i].type === 'switchesBig' || this.data[i].type === 'switchesSmall') {
                    const geometry = new THREE.TextGeometry(this.data[i].text, {   // this.data[i].text
                        font: fonts,
                        size: 0.35,
                        height: 0.1
                    });
                    const meshMaterial = new THREE.MeshLambertMaterial({
                        opacity: 0.9,
                        color: 0xffffff
                    });
                    const font = new THREE.Mesh(geometry, meshMaterial);
                    font.position.set(this.data[i].position[0] + this.data[i].size[0] * 0.5,
                        this.data[i].position[1] - this.data[i].size[0] * 0.06, this.data[i].position[2] + this.data[i].size[0] * 0.48);
                    // font.rotation.z +=  Math.PI * 2 / 4;
                    font.rotation.y += Math.PI * 2 / 4;
                    this.scene.add(font);
                } else if (this.data[i].type === 'host' || this.data[i].type === 'fire') {
                    const geometry = new THREE.TextGeometry(this.data[i].text, {   // this.data[i].text
                        font: fonts,
                        size: 0.45,
                        height: 0.1
                    });
                    const meshMaterial = new THREE.MeshLambertMaterial({
                        opacity: 0.9,
                        color: 0xffffff
                    });
                    const font = new THREE.Mesh(geometry, meshMaterial);
                    font.position.set(this.data[i].position[0] - this.data[i].size[0] * 0.8,
                        this.data[i].position[1] + this.data[i].size[0] * 0.5, this.data[i].position[2] + this.data[i].size[0] * 0.6);
                    font.rotation.y += Math.PI * 2 / 4;
                    // font.rotation.x +=  Math.PI * 2 / 9;
                    this.scene.add(font);
                }
            }
        });

        // 用canvas 画字 贴图
        for (const i in this.data) {
            // if (this.data[i].type === 'area' && this.data[i].text.length > 0) {
            //     const textCanvas = document.createElement('canvas');
            //     const cttextCanvas = textCanvas.getContext('2d');
            //     textCanvas.width = 200;
            //     textCanvas.height = 40;
            //     cttextCanvas.fillStyle = '#01ffe6';
            //     cttextCanvas.font = '20px PingFangSC-Regular';
            //     cttextCanvas.fillText(this.data[i].text, textCanvas.width / 2, textCanvas.height / 2);
            //     const textTexture = new THREE.CanvasTexture(textCanvas);
            //     textTexture.minFilter = THREE.LinearFilter;
            //     const textMatrrial = new THREE.MeshLambertMaterial({
            //         map: textTexture,
            //         side: THREE.DoubleSide,
            //         transparent: true,
            //         opacity: 1
            //     });
            //     const textGeoMetry = new THREE.PlaneGeometry(10, 2);
            //     const textPlane = new THREE.Mesh(textGeoMetry, textMatrrial);
            //     textPlane.position.set(this.data[i].textPosition[0], this.data[i].textPosition[1] - 0.5,
            //         this.data[i].textPosition[2]);
            //     this.scene.add(textPlane);
            // } else if (this.data[i].type === 'switchesBig' || this.data[i].type === 'switchesSmall') {
            //     const textCanvas1 = document.createElement('canvas');
            //     const cttextCanvas1 = textCanvas1.getContext('2d');
            //     textCanvas1.width = 200;
            //     textCanvas1.height = 40;
            //     cttextCanvas1.fillStyle = '#ffffff';
            //     cttextCanvas1.font = '12px PingFangSC-Regular';
            //     cttextCanvas1.fillText(this.data[i].text, textCanvas1.width / 2, textCanvas1.height / 2);
            //     const textTexture1 = new THREE.CanvasTexture(textCanvas1);
            //     textTexture1.minFilter = THREE.LinearFilter;
            //     const textMatrrial1 = new THREE.MeshLambertMaterial({
            //         map: textTexture1,
            //         side: THREE.DoubleSide,
            //         transparent: true,
            //         opacity: 1
            //     });
            //     const textGeoMetry1 = new THREE.PlaneGeometry(this.data[i].size[0] * 4, 2);
            //     const textPlane1 = new THREE.Mesh(textGeoMetry1, textMatrrial1);
            //     textPlane1.position.set(this.data[i].position[0] + this.data[i].size[0] * 0.5,
            //         this.data[i].position[1] - this.data[i].size[0] * 0.06, this.data[i].position[2] + this.data[i].size[0] * 0.4);
            //     textPlane1.rotation.y += Math.PI * 2 / 4;
            //     this.scene.add(textPlane1);
            // } else if (this.data[i].type === 'host' || this.data[i].type === 'fire') {
            //     const textCanvas2 = document.createElement('canvas');
            //     const cttextCanvas2 = textCanvas2.getContext('2d');
            //     textCanvas2.width = 200;
            //     textCanvas2.height = 40;
            //     cttextCanvas2.fillStyle = '#ffffff';
            //     cttextCanvas2.font = '14px PingFangSC-Regular';
            //     cttextCanvas2.fillText(this.data[i].text, textCanvas2.width / 2, textCanvas2.height / 2);
            //     const textTexture2 = new THREE.CanvasTexture(textCanvas2);
            //     textTexture2.minFilter = THREE.LinearFilter;
            //     const textMatrrial2 = new THREE.MeshLambertMaterial({
            //         map: textTexture2,
            //         side: THREE.DoubleSide,
            //         transparent: true,
            //         opacity: 1
            //     });
            //     const textGeoMetry2 = new THREE.PlaneGeometry(this.data[i].size[0] * 4, 2);
            //     const textPlane2 = new THREE.Mesh(textGeoMetry2, textMatrrial2);
            //     textPlane2.position.set(this.data[i].position[0] - this.data[i].size[0] * 0.8,
            //         this.data[i].position[1] + this.data[i].size[0] * 0.5, this.data[i].position[2] + this.data[i].size[0] * 0.6);
            //     textPlane2.rotation.y += Math.PI * 2 / 4;
            //     this.scene.add(textPlane2);
            // }
        }
    }

    // 攻击球动画
    attackAnimate() {
        console.log('--+++++++++-----------');
        const minLength = 0.05;
        for (const item of this.scene.children) {
            if (item.name === 'attacker') {
                item.position.set(6, 0, 9.5);
                const currentNode = item.userData.path[item.userData.nextIndex - 1];
                const nextNode = item.userData.path[item.userData.nextIndex];
                const distance = Math.sqrt(Math.pow(item.position[0] - nextNode[0], 2) + Math.pow(item.position[1] - nextNode[1], 2)
                    + Math.pow(item.position[2] - nextNode[20], 2));
                console.log(item, distance);
                if (distance <= 0.05) {
                    item.position.set(...nextNode);
                    item.userData.nextIndex += 1;
                } else {
                    item.position.set();
                }
            }
        }
    }

    animate = () => {
        // this.times++;
        requestAnimationFrame(this.animate);
        // this.attackAnimate();
        // if (this.times <= 3) {
        //     return;
        // } else {
        //     this.times = 0;
        // }
        this.renderer.render(this.scene, this.camera);
    }



}
