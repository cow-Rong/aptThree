import { Component, OnInit } from '@angular/core';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.styl']
})
export class TestComponent implements OnInit {

  constructor() { }

  camera: any;
  scene: any;
  renderer: any;

  ngOnInit() {
    this.init();
    this.animate();
  }

  init() {

    this.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 10000);
    this.camera.position.set(0, - 400, 600);

    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0xf0f0f0);

    const loader = new THREE.FontLoader();
    loader.load('assets/helvetiker_regular.typeface.json', (font) => {

      let xMid, text;

      const color = 0x006699;

      const matDark = new THREE.LineBasicMaterial({
        color,
        side: THREE.DoubleSide
      });

      const matLite = new THREE.MeshBasicMaterial({
        color,
        transparent: true,
        opacity: 0.4,
        side: THREE.DoubleSide
      });

      const message = '测试';

      const shapes = font.generateShapes(message, 10, 1);

      const geometry = new THREE.ShapeBufferGeometry(shapes);

      geometry.computeBoundingBox();

      xMid = - 0.5 * (geometry.boundingBox.max.x - geometry.boundingBox.min.x);

      geometry.translate(xMid, 0, 0);

      // make shape ( N.B. edge view not visible )

      text = new THREE.Mesh(geometry, matLite);
      text.position.z = - 150;
      this.scene.add(text);

      // make line shape ( N.B. edge view remains visible )

      const holeShapes = [];

      for (let i = 0; i < shapes.length; i++) {

        const shape = shapes[i];

        if (shape.holes && shape.holes.length > 0) {

          for (let j = 0; j < shape.holes.length; j++) {

            const hole = shape.holes[j];
            holeShapes.push(hole);

          }

        }

      }

      shapes.push.apply(shapes, holeShapes);

      const lineText = new THREE.Object3D();

      for (let i = 0; i < shapes.length; i++) {

        const shape = shapes[i];

        const points = shape.getPoints();
        const geometry = new THREE.BufferGeometry().setFromPoints(points);

        geometry.translate(xMid, 0, 0);

        const lineMesh = new THREE.Line(geometry, matDark);
        lineText.add(lineMesh);

      }

      this.scene.add(lineText);

    }); //end load function

    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(this.renderer.domElement);

    const controls = new OrbitControls(this.camera, this.renderer.domElement);
    controls.target.set(0, 0, 0);
    controls.update();

    window.addEventListener('resize', this.onWindowResize, false);

  } // end init

  onWindowResize() {

    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();

    this.renderer.setSize(window.innerWidth, window.innerHeight);

  }

  animate = () =>{

    requestAnimationFrame(this.animate);

    this.render();

  }

  render() {

    this.renderer.render(this.scene, this.camera);

  }


}
