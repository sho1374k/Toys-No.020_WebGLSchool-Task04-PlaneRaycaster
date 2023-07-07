// --------------------------

// lib

// --------------------------
import * as THREE from "three";

// --------------------------

// module

// --------------------------
import { Config } from "./Config";

export class Stage {
  constructor(params, bool) {
    // props
    this.params = params;
    this.bool = bool;

    // init
    this.scene = null;
    this.camera = null;
    this.renderer = null;
    this.controls = null;
    this.stats = null;

    this.init();
  }

  init() {
    this.setRenderer();
    this.setScene();
    this.setCamera();
    // this.setFog();
  }

  updateRenderer() {
    this.renderer.setSize(this.params.w, this.params.h);
    this.renderer.setPixelRatio(Math.min(2, window.devicePixelRatio));
  }

  setRendererLight() {
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.needsUpdate = true;
    this.renderer.shadowMap.autoUpdate = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    // this.renderer.toneMapping = THREE.CineonToneMapping;
    // this.renderer.shadowMap.type = THREE.BasicShadowMap
    // this.renderer.shadowMap.type = THREE.PCFShadowMap
    // this.renderer.shadowMap.type = THREE.PCFSoftShadowMap
    // this.renderer.shadowMap.type = THREE.VSMShadowMap
    // this.renderer.outputEncoding = THREE.sRGBEncoding;
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    // this.renderer.outputColorSpace = THREE.LinearSRGBColorSpace;
    // this.renderer.outputColorSpace = THREE.NoColorSpace;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1; //1.75
    // this.renderer.physicallyCorrectLights = true;
  }

  setRenderer() {
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    this.renderer.shadowMap.enabled = true;
    this.setRendererLight();
    this.updateRenderer();

    const wrap = document.getElementById("world");
    wrap.appendChild(this.renderer.domElement);
  }

  setScene() {
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color("#eef0f4");
    // if (GUI != null) {
    //   const scene = GUI.addFolder("scene");
    //   // scene.close();
    //   scene
    //     .addColor(this.scene, "background")
    //     .name("background")
    //     .onChange((value) => {
    //       this.scene.background = new THREE.Color(value);
    //     });
    // }

    // SceneHelper
    // if (MODE) {
    //   this.scene.add(new THREE.GridHelper(1000, 100));
    //   this.scene.add(new THREE.AxesHelper(100));
    // }
  }

  updateCamera() {
    const SCALE = 0.25;

    this.camera.left = SCALE * this.params.aspect * -1;
    this.camera.right = SCALE * this.params.aspect;
    this.camera.top = SCALE;
    this.camera.bottom = SCALE * -1;
    this.camera.near = 0.1;
    this.camera.far = 100;
    this.camera.position.x = Config.camera.position.init.x;
    this.camera.position.y = Config.camera.position.init.y;
    this.camera.position.z = Config.camera.position.init.z;
    this.camera.zoom = Config.camera.zoom.init;
    this.camera.updateProjectionMatrix();
  }

  setCamera() {
    this.camera = new THREE.OrthographicCamera();
    this.updateCamera();
  }

  raf() {}

  resize(props) {
    this.bool.isMatchMediaWidth = props.isMatchMediaWidth;
    this.params.w = props.w;
    this.params.h = props.h;
    this.params.aspect = props.aspect;
    this.params.shorter = props.shorter;
    this.params.longer = props.longer;

    this.updateRenderer();
    this.updateCamera();
  }
}
