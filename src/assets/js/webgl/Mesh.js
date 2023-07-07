// --------------------------

// lib

// --------------------------
import * as THREE from "three";

// --------------------------

// shader

// --------------------------
import fragmentShader from "../../shader/frag/plane.glsl";
import vertexShader from "../../shader/vert/plane.glsl";
import depthFragmentShader from "../../shader/frag/depth.glsl";
import depthVertexShader from "../../shader/vert/depth.glsl";

// --------------------------

// module

// --------------------------
import { Config } from "./Config";

const PI = Math.PI;
const MIN_DISTANCE = 6; // 範囲に含む最小値: マウス座標から一番遠い距離
const MAX_DISTANCE = 0; // 範囲に含む最大値: マウス座標に一番近い距離
const MIN_SCALE = 0; // スケールする最小値
const MAX_SCALE = 1; // スケールする最大値

export class Mesh {
  constructor(body, params, bool, stage) {
    this.body = body;
    this.stage = stage;
    this.params = params;
    this.bool = bool;

    this.isPageEnter = false;
    this.isLoaded = false;
    this.isMove = false; // touchmove, mousemove
    this.isZoom = false;
    this.isHover = false;
    this.isClickClose = true;
    this.isClickedPlane = false;

    this.timer = { move: null };

    this.grid = { col: 8, row: 5 };

    this.vector = {
      normalize: { x: 0, y: 0 },
      start: { x: 0, y: 0 },
      move: { x: 0, y: 0 },
    };

    this.anime = { move: 1 };

    this.imgList = [
      "assets/img/img1.webp",
      "assets/img/img2.webp",
      "assets/img/img3.webp",
      "assets/img/img4.webp",
      "assets/img/img5.webp",
      "assets/img/img6.webp",
      "assets/img/img7.webp",
      "assets/img/img8.webp",
      "assets/img/img9.webp",
      "assets/img/img10.webp",
      "assets/img/img11.webp",
      "assets/img/img12.webp",
      "assets/img/img13.webp",
      "assets/img/img14.webp",
      "assets/img/img15.webp",
      "assets/img/img16.webp",
      "assets/img/img17.webp",
      "assets/img/img18.webp",
      "assets/img/img19.webp",
      "assets/img/img20.webp",
      "assets/img/img21.webp",
      "assets/img/img22.webp",
      "assets/img/img23.webp",
      "assets/img/img24.webp",
      "assets/img/img25.webp",
      "assets/img/img26.webp",
      "assets/img/img27.webp",
      "assets/img/img28.webp",
      "assets/img/img29.webp",
      "assets/img/img30.webp",
      "assets/img/img31.webp",
      "assets/img/img32.webp",
      "assets/img/img33.webp",
      "assets/img/img34.webp",
      "assets/img/img35.webp",
      "assets/img/img36.webp",
      "assets/img/img37.webp",
      "assets/img/img38.webp",
      "assets/img/img39.webp",
      "assets/img/img40.webp",
    ];

    this.planeGroup = null;
    this.clickedMesh = null;

    this.textureLoader = new THREE.TextureLoader();
    this.raycaster = new THREE.Raycaster();
    this.raycaster2 = new THREE.Raycaster();

    this.canvas = this.stage.renderer.domElement;

    this.init();
  }

  /**
   * 2点の座標から距離を求める
   * https://shanabrian.com/web/javascript/two-point-distance.php
   * @param {number} x1
   * @param {number} y1
   * @param {number} x2
   * @param {number} y2
   * @returns 2点の座標の距離
   */
  getDistance(x1, y1, x2, y2) {
    return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
  }

  /**
   * マッピング関数: 値を`0 ~ 1`に正規化し、任意の範囲にスケール(拡大縮小)させる
   * https://p5js.org/reference/#/p5/map
   * @param {number} value // マッピングする値
   * @param {number} start1 // 現在の下限値
   * @param {number} stop1 // 現在の上限値
   * @param {number} start2 // 最終の下限値
   * @param {number} stop2 // 最終の上限値
   * @returns 任意の範囲にスケールさせた値
   */
  map(value, start1, stop1, start2, stop2) {
    return ((value - start1) / (stop1 - start1)) * (stop2 - start2) + start2;
  }

  textureLoad(path) {
    return this.textureLoader.loadAsync(path);
  }

  setPlaneGeometry() {
    this.geometry = new THREE.PlaneGeometry(1, 1, 84, 84);
  }

  setGrid() {
    return new Promise((resolve) => {
      const SIZE = Config.plane.size;
      const SCALE = Config.plane.scale.init;

      // グループ作成
      this.planeGroup = new THREE.Group();
      this.planeGroup.position.x = (this.grid.col - 1 + (this.grid.col - 1) * SIZE) * -0.5;
      this.planeGroup.position.y = 0;
      this.planeGroup.position.z = (this.grid.row - 1 + (this.grid.row - 1) * SIZE) * -0.5;
      this.stage.scene.add(this.planeGroup);

      const g = this.geometry;

      const lambert = THREE.ShaderLib["lambert"];
      const material = new THREE.ShaderMaterial({
        fragmentShader: fragmentShader,
        vertexShader: vertexShader,
        uniforms: Object.assign(lambert.uniforms, {
          diffuse: { type: "v3", value: new THREE.Color("#fff") },
          uTexture: { type: "t", value: null },
          uTime: { type: "f", value: 0.0 },
          uScale: { type: "f", value: 1.0 },
          uClick: { type: "f", value: 1.0 },
          uProgress: { type: "f", value: 0.0 },
        }),
        transparent: true,
        lights: true,
        fog: false,
        side: THREE.DoubleSide,
      });

      const depth = THREE.ShaderLib["depth"];
      const depthMaterial = new THREE.ShaderMaterial({
        vertexShader: depthVertexShader,
        fragmentShader: depthFragmentShader,
        uniforms: Object.assign(depth.uniforms, {
          uTime: { type: "f", value: 0.0 },
          uScale: { type: "f", value: 1.0 },
          uClick: { type: "f", value: 1.0 },
          uProgress: { type: "f", value: 0.0 },
        }),
        defines: {
          DEPTH_PACKING: THREE.RGBADepthPacking,
        },
      });

      let index = 0;
      const limitMax = this.grid.row * this.grid.col;
      for (let row = 0; row < this.grid.row; row++) {
        for (let col = 0; col < this.grid.col; col++) {
          const img = this.imgDataList[index];
          const m = material.clone();

          m.uniforms.uTexture.value = img;

          const mesh = new THREE.Mesh(g, m);
          mesh.name = `plane${index}`;
          mesh.positionY = 0; // アニメーション用に設定

          // グリッド配置
          const x = col + col * SIZE;
          const y = 0;
          const z = row + row * SIZE;
          mesh.position.set(x, y, z);
          mesh.rotation.x = Math.PI * -0.5;
          mesh.scale.set(0, 0, SCALE);

          // 影
          mesh.castShadow = true;
          mesh.receiveShadow = true;
          mesh.customDepthMaterial = depthMaterial.clone();
          mesh.customDistanceMaterial = depthMaterial.clone();

          this.planeGroup.add(mesh);

          // 最後にindex番号を更新する
          index++;
          if (index === limitMax) {
            if (GUI != null) {
              const plane = GUI.addFolder("plane");
              plane
                .add(this.planeGroup.children[0].material.uniforms.uProgress, "value", -1.0, 1.0)
                .name("uProgress")
                .onChange((value) => {
                  for (let i = 0; i < this.planeGroup.children.length; i++) {
                    const mesh = this.planeGroup.children[i];
                    mesh.material.uniforms.uProgress.value = value;
                  }
                });
              plane
                .add(this.planeGroup.children[0].material.uniforms.uClick, "value", -1.0, 1.0)
                .name("uClick")
                .onChange((value) => {
                  for (let i = 0; i < this.planeGroup.children.length; i++) {
                    const mesh = this.planeGroup.children[i];
                    mesh.material.uniforms.uClick.value = value;
                  }
                });
            }
            return resolve();
          }
        }
      }
    });
  }

  setFloor() {
    const SCALE = 100;
    const g = this.geometry;
    const m = new THREE.MeshLambertMaterial({
      color: new THREE.Color("#fff"),
      side: THREE.FrontSide,
    });
    this.floorMesh = new THREE.Mesh(g, m);
    this.floorMesh.name = "floor";
    this.floorMesh.receiveShadow = true;
    this.floorMesh.scale.set(SCALE, SCALE, SCALE);
    this.floorMesh.rotation.x = Math.PI * -0.5;
    this.floorMesh.position.y = this.bool.isAndroid ? -0.2 : -0.12;
    this.stage.scene.add(this.floorMesh);
  }

  setLight() {
    const MAP_SIZE = 2048;

    // スポットライト1
    this.spotLight1 = new THREE.SpotLight(new THREE.Color("#fff"), 1.0); // 1
    this.spotLight1.angle = PI / 6;
    this.spotLight1.penumbra = 1;
    this.spotLight1.decay = 2;
    this.spotLight1.castShadow = true;
    this.spotLight1.shadow.mapSize.width = MAP_SIZE;
    this.spotLight1.shadow.mapSize.height = MAP_SIZE;
    this.spotLight1.shadow.camera.near = 1;
    this.spotLight1.shadow.focus = 1;
    this.spotLight1.shadow.bias = -0.0001; // シャドウアクネ対策
    this.spotLight1.position.set(4, 30, 4);
    this.spotLight1.distance = 160;
    this.spotLight1.shadow.camera.far = 160;
    this.stage.scene.add(this.spotLight1);
    // if (MODE) {
    //   const spotLightHelper = new THREE.SpotLightHelper(this.spotLight1);
    //   this.stage.scene.add(spotLightHelper);
    // }

    // アンビエントライト
    this.ambientLight = new THREE.AmbientLight(new THREE.Color("#fff"), 0.5); // .5
    this.stage.scene.add(this.ambientLight);

    if (GUI != null) {
      // アンビエントライト
      if (this.ambientLight) {
        const ambientlight = GUI.addFolder("ambientlight");
        ambientlight.close();
        ambientlight
          .addColor(this.ambientLight, "color")
          .name("color")
          .onChange((value) => {
            this.ambientLight.color = new THREE.Color(value);
          });
        ambientlight
          .add(this.ambientLight, "intensity", 0.0, 1.0)
          .name("intensity")
          .onChange((value) => {
            this.ambientLight.intensity = value;
          });
      }

      // スポットライト1
      if (this.spotLight1) {
        const spotligth = GUI.addFolder("spotligth");
        spotligth.close();
        spotligth
          .addColor(this.spotLight1, "color")
          .name("color")
          .onChange((value) => {
            this.spotLight1.color = new THREE.Color(value);
          });
        spotligth
          .add(this.spotLight1, "intensity", 0.0, 20.0)
          .name("intensity")
          .onChange((value) => {
            this.spotLight1.intensity = value;
          });
        spotligth
          .add(this.spotLight1, "penumbra", 0.0, 10.0)
          .name("penumbra")
          .onChange((value) => {
            this.spotLight1.penumbra = value;
          });
        spotligth
          .add(this.spotLight1, "decay", 0.0, 10.0)
          .name("decay")
          .onChange((value) => {
            this.spotLight1.decay = value;
          });
        spotligth
          .add(this.spotLight1.shadow, "focus", 0.0, 10.0)
          .name("focus")
          .onChange((value) => {
            this.spotLight1.shadow.focus = value;
          });
        spotligth
          .add(this.spotLight1.shadow, "bias", -1.0, 1.0)
          .name("bias")
          .onChange((value) => {
            this.spotLight1.shadow.bias = value;
          });
        spotligth
          .add(this.spotLight1, "distance", 0.0, 200.0)
          .name("distance")
          .onChange((value) => {
            this.spotLight1.distance = value;
          });
        spotligth
          .add(this.spotLight1.shadow.camera, "far", 0.0, 200.0)
          .name("far")
          .onChange((value) => {
            this.spotLight1.shadow.camera.far = value;
          });
        spotligth
          .add(this.spotLight1.position, "x", 0.0, 100.0)
          .name("position.x")
          .onChange((value) => {
            this.spotLight1.position.x = value;
          });
        spotligth
          .add(this.spotLight1.position, "y", 0.0, 100.0)
          .name("position.y")
          .onChange((value) => {
            this.spotLight1.position.y = value;
          });
        spotligth
          .add(this.spotLight1.position, "z", 0.0, 100.0)
          .name("position.z")
          .onChange((value) => {
            this.spotLight1.position.z = value;
          });
      }
    }
  }

  resize(props) {
    // this.bool.isMatchMediaWidth = props.isMatchMediaWidth;
    this.params.w = props.w;
    this.params.h = props.h;
    // this.params.aspect = props.aspect;
    // this.params.shorter = props.shorter;
    // this.params.longer = props.longer;
  }

  onMove(e) {
    this.vector.move.x = e.touches ? e.touches[0].clientX : e.clientX;
    this.vector.move.y = e.touches ? e.touches[0].clientY : e.clientY;

    this.vector.normalize.x = (this.vector.move.x / this.params.w) * 2.0 - 1.0;
    this.vector.normalize.y = (this.vector.move.y / this.params.h) * -2.0 + 1.0;
    if (!this.isMove) {
      this.isMove = true;
    }

    if (this.isMove) {
      clearTimeout(this.timer.move);
      this.timer.move = setTimeout(() => {
        this.isMove = false;
      }, 300);
    }
  }

  onCloseZoom() {
    if (this.isClickClose) {
      const SIZE = 2;
      const DURATION = 1;
      const EASE = "power4.inOut";

      this.body.setAttribute("data-zoom", 0);

      if (this.clickedMesh != null) {
        const beforeMesh = this.clickedMesh;
        this.clickedMesh = null;

        // 板ポリアニメーション to 初期値
        GSAP.to(beforeMesh.scale, DURATION, {
          ease: EASE,
          x: Config.plane.scale.init,
          y: Config.plane.scale.init,
          z: Config.plane.scale.init,
        });
        GSAP.to(beforeMesh, DURATION, {
          ease: EASE,
          positionY: 0,
        });
        GSAP.to(
          [
            beforeMesh.material.uniforms.uClick,
            beforeMesh.customDepthMaterial.uniforms.uClick,
            beforeMesh.customDistanceMaterial.uniforms.uClick,
          ],
          DURATION,
          {
            ease: EASE,
            value: 1.0,
          },
        );

        // グループアニメーション to 初期値
        GSAP.to(this.planeGroup.position, DURATION, {
          ease: EASE,
          x: (this.grid.col - 1 + (this.grid.col - 1) * SIZE) * -0.5,
          z: (this.grid.row - 1 + (this.grid.row - 1) * SIZE) * -0.5,
        });

        // カメラアニメーション to 初期値
        GSAP.to(this.stage.camera.position, DURATION, {
          ease: EASE,
          x: Config.camera.position.init.x,
          y: Config.camera.position.init.y,
          z: Config.camera.position.init.z,
        });
        GSAP.to(this.stage.camera.quaternion, DURATION, {
          ease: EASE,
          x: Config.camera.quaternion.init.x,
          y: Config.camera.quaternion.init.y,
          z: Config.camera.quaternion.init.z,
          w: Config.camera.quaternion.init.w,
        });
        GSAP.to(this.stage.camera.rotation, DURATION, {
          ease: EASE,
          x: Config.camera.rotation.init.x,
          y: Config.camera.rotation.init.y,
          z: Config.camera.rotation.init.z,
          onComplete: () => {
            this.isZoom = false;
          },
        });
      }
    }
  }

  // レイキャストで全体をホバリングしているとき
  onHoverWorldInRaycast() {
    if (this.floorMesh != null) {
      this.raycaster.setFromCamera(this.vector.normalize, this.stage.camera);
      const intersects = this.raycaster.intersectObjects([this.floorMesh]);
      if (intersects.length && this.planeGroup != null) {
        if (intersects[0]) {
          const point = intersects[0].point;
          const x = point.x;
          const z = point.z;

          let index = 0;
          if (this.planeGroup.children.length > 0) {
            for (let row = 0; row < this.grid.row; row++) {
              for (let col = 0; col < this.grid.col; col++) {
                const mesh = this.planeGroup.children[index];

                // 原点からのワールド座標を取得
                const meshWorldPosition = mesh.getWorldPosition(new THREE.Vector3());

                // マウスからメッシュへの直線距離を取得
                const distance = this.getDistance(x, z, meshWorldPosition.x, meshWorldPosition.z);

                // マウスとメッシュとの直線距離をスケールする
                const scale = this.map(distance, MIN_DISTANCE, MAX_DISTANCE, MIN_SCALE, MAX_SCALE);

                // 状態によってパラメータを切り替える
                GSAP.to(this.anime, {
                  duration: this.isZoom ? 10 : this.isMove ? 10 : 30,
                  move: this.isZoom ? 0.0 : this.isMove ? 1.0 : 0.0,
                });

                if (this.isPageEnter) {
                  // 進捗をクランプする
                  const progress = G.clamp(scale, 0.0, 1.0) * this.anime.move;

                  // shader更新
                  GSAP.to(mesh.material.uniforms.uProgress, {
                    duration: 0.4,
                    value: progress,
                  });
                  GSAP.to(mesh.customDepthMaterial.uniforms.uProgress, {
                    duration: 0.4,
                    value: progress,
                  });
                  GSAP.to(mesh.customDistanceMaterial.uniforms.uProgress, {
                    duration: 0.4,
                    value: progress,
                  });

                  // ポジション更新
                  GSAP.to(mesh.position, {
                    duration: 0.4,
                    y: progress * 0.4 + mesh.positionY,
                  });
                }

                // index番号を更新
                index++;

                if (!this.isLoaded) {
                  if (index === this.grid.row * this.grid.col) {
                    this.isLoaded = true;
                    console.log("読み込み完了");
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  // レイキャストでマウスクリックしたとき
  onMouseClickedPlaneInRaycast() {
    this.raycaster2.setFromCamera(this.vector.normalize, this.stage.camera);
    const intersects = this.raycaster.intersectObjects(this.planeGroup.children);

    if (!this.isClickedPlane) {
      // hoverしているかどうか
      if (intersects.length > 0) {
        this.isHover = true;
        if (this.isHover) {
          this.isHover = false;
          this.body.setAttribute("data-hover", 1);
        }
      } else {
        if (!this.isHover) {
          this.isHover = true;
          this.body.setAttribute("data-hover", 0);
        }
      }

      // アニメーション
      if (intersects.length > 0 && this.isDown) {
        this.isClickedPlane = true;
        this.isZoom = true;

        const DURATION = 1;
        const EASE = "power4.inOut";

        this.body.setAttribute("data-zoom", 1);

        if (this.clickedMesh != null) {
          const beforeMesh = this.clickedMesh;
          this.clickedMesh = null;

          GSAP.to(beforeMesh.scale, DURATION, {
            ease: EASE,
            x: Config.plane.scale.init,
            y: Config.plane.scale.init,
            z: Config.plane.scale.init,
          });
          GSAP.to(beforeMesh, DURATION, {
            ease: EASE,
            positionY: 0,
          });
          GSAP.to(
            [
              beforeMesh.material.uniforms.uClick,
              beforeMesh.customDepthMaterial.uniforms.uClick,
              beforeMesh.customDistanceMaterial.uniforms.uClick,
            ],
            DURATION,
            {
              ease: EASE,
              value: 1.0,
            },
          );
        }

        // 板ポリアニメーション
        this.clickedMesh = intersects[0].object;
        GSAP.to(
          [
            this.clickedMesh.material.uniforms.uClick,
            this.clickedMesh.customDepthMaterial.uniforms.uClick,
            this.clickedMesh.customDistanceMaterial.uniforms.uClick,
          ],
          DURATION,
          {
            ease: EASE,
            value: 0.0,
          },
        );
        GSAP.to(this.clickedMesh, DURATION, {
          ease: EASE,
          positionY: 0.6,
        });
        GSAP.to(this.clickedMesh.scale, DURATION, {
          ease: EASE,
          x: Config.plane.scale.anime,
          y: Config.plane.scale.anime,
          z: Config.plane.scale.anime,
        });

        // グループアニメーション
        GSAP.to(this.planeGroup.position, DURATION, {
          ease: EASE,
          x: this.clickedMesh.position.x * -1,
          z: this.clickedMesh.position.z * -1,
        });

        // カメラアニメーション
        GSAP.to(this.stage.camera.position, DURATION, {
          ease: EASE,
          x: Config.camera.position.anime.x,
          y: Config.camera.position.anime.y,
          z: Config.camera.position.anime.z,
        });
        GSAP.to(this.stage.camera.quaternion, DURATION, {
          ease: EASE,
          x: Config.camera.quaternion.anime.x,
          y: Config.camera.quaternion.anime.y,
          z: Config.camera.quaternion.anime.z,
          w: Config.camera.quaternion.anime.w,
        });
        GSAP.to(this.stage.camera.rotation, DURATION, {
          ease: EASE,
          x: Config.camera.rotation.anime.x,
          y: Config.camera.rotation.anime.y,
          z: Config.camera.rotation.anime.z,
          onComplete: () => {
            this.isClickedPlane = false;
            this.isClickClose = true;
          },
        });
      }
    }
  }

  // レイキャストでタッチクリックしたとき
  onTouchClickedPlaneInRaycast() {
    this.raycaster2.setFromCamera(this.vector.normalize, this.stage.camera);
    const intersects = this.raycaster.intersectObjects(this.planeGroup.children);
    if (this.isClickedPlane) {
      this.isClickedPlane = false;
      if (intersects.length > 0) {
        this.isZoom = true;

        const DURATION = 1;
        const EASE = "power4.inOut";

        this.body.setAttribute("data-zoom", 1);

        // 1つ前の板ポリアニメーションを解除する
        if (this.clickedMesh != null) {
          const beforeMesh = this.clickedMesh;
          this.clickedMesh = null;

          GSAP.to(beforeMesh.scale, DURATION, {
            ease: EASE,
            x: Config.plane.scale.init,
            y: Config.plane.scale.init,
            z: Config.plane.scale.init,
          });
          GSAP.to(beforeMesh, DURATION, {
            ease: EASE,
            positionY: 0,
          });
          GSAP.to(
            [
              beforeMesh.material.uniforms.uClick,
              beforeMesh.customDepthMaterial.uniforms.uClick,
              beforeMesh.customDistanceMaterial.uniforms.uClick,
            ],
            DURATION,
            {
              ease: EASE,
              value: 1.0,
            },
          );
        }

        // 新規板ポリアニメーション
        this.clickedMesh = intersects[0].object;
        GSAP.to(
          [
            this.clickedMesh.material.uniforms.uClick,
            this.clickedMesh.customDepthMaterial.uniforms.uClick,
            this.clickedMesh.customDistanceMaterial.uniforms.uClick,
          ],
          DURATION,
          {
            ease: EASE,
            value: 0.0,
          },
        );
        GSAP.to(this.clickedMesh, DURATION, {
          ease: EASE,
          positionY: 0.6,
        });
        GSAP.to(this.clickedMesh.scale, DURATION, {
          ease: EASE,
          x: Config.plane.scale.anime,
          y: Config.plane.scale.anime,
          z: Config.plane.scale.anime,
        });

        // グループアニメーション
        GSAP.to(this.planeGroup.position, DURATION, {
          ease: EASE,
          x: this.clickedMesh.position.x * -1,
          z: this.clickedMesh.position.z * -1,
        });

        // カメラアニメーション
        GSAP.to(this.stage.camera.position, DURATION, {
          ease: EASE,
          x: Config.camera.position.anime.x,
          y: Config.camera.position.anime.y,
          z: Config.camera.position.anime.z,
        });
        GSAP.to(this.stage.camera.quaternion, DURATION, {
          ease: EASE,
          x: Config.camera.quaternion.anime.x,
          y: Config.camera.quaternion.anime.y,
          z: Config.camera.quaternion.anime.z,
          w: Config.camera.quaternion.anime.w,
        });
        GSAP.to(this.stage.camera.rotation, DURATION, {
          ease: EASE,
          x: Config.camera.rotation.anime.x,
          y: Config.camera.rotation.anime.y,
          z: Config.camera.rotation.anime.z,
          onComplete: () => {
            this.isClickClose = true;
          },
        });
      }
    }
  }

  raf(time) {
    this.onHoverWorldInRaycast();
    if (this.isPageEnter) {
      if (this.bool.isMatchMediaHover) {
        this.onMouseClickedPlaneInRaycast();
      } else {
        this.onTouchClickedPlaneInRaycast();
      }
    }
    this.stage.renderer.render(this.stage.scene, this.stage.camera);
  }

  toEnterAnimation() {
    const DURATION = 2;
    const DELAY = DURATION - 0.5;
    const EASE = "power4.inOut";
    for (let i = 0; i < this.planeGroup.children.length; i++) {
      const mesh = this.planeGroup.children[i];

      // scene1
      GSAP.to(mesh.scale, DURATION, {
        ease: EASE,
        x: Config.plane.scale.init,
        y: Config.plane.scale.init,
        onStart: () => {
          if (i === this.planeGroup.children.length - 1) {
            this.body.setAttribute("data-loaded", "1");
          }
        },
      });
      GSAP.to(mesh.position, DURATION, {
        ease: EASE,
        y: i * 0.01,
      });

      // scene2
      GSAP.to(mesh.position, DURATION, {
        ease: EASE,
        delay: DELAY,
        y: 0,
      });
      GSAP.from(mesh.position, DURATION, {
        ease: EASE,
        x: (this.grid.col - 1 + (this.grid.col - 1) * Config.plane.size) * 0.5,
        z: (this.grid.row - 1 + (this.grid.row - 1) * Config.plane.size) * 0.5,
        delay: DELAY,
        onComplete: () => {
          if (i === this.planeGroup.children.length - 1) {
            this.isPageEnter = true;
            this.body.setAttribute("data-status", "enter");
          }
        },
      });
    }
  }

  async init() {
    this.setLight();
    this.setPlaneGeometry();
    this.setFloor();

    // 画像データ作成
    this.imgDataList = [];
    this.imgDataList = await Promise.all(
      this.imgList.map((ele, i) => {
        return this.textureLoad(ele);
      }),
    );

    await this.setGrid();

    this.toEnterAnimation();

    this.closeBtn = document.getElementById("js-closeBtn");
    this.closeBtn.addEventListener("click", (e) => {
      this.onCloseZoom();
    });

    if (this.bool.isMatchMediaHover) {
      // マウスデバイス
      this.isDown = false;
      this.canvas.addEventListener("mousemove", this.onMove.bind(this), {
        passive: true,
      });
      this.canvas.addEventListener("mousedown", (e) => {
        this.isDown = true;
      });
      this.canvas.addEventListener("mouseup", (e) => {
        this.isDown = false;
      });
    } else {
      this.isDown = false;
      // タッチデバイス
      this.canvas.addEventListener("touchstart", (e) => {
        this.isDown = true;
        this.vector.start.x = e.touches[0].clientX;
        this.vector.start.y = e.touches[0].clientY;
      });
      this.canvas.addEventListener("touchmove", this.onMove.bind(this), {
        passive: true,
      });
      this.canvas.addEventListener("touchend", (e) => {
        clearTimeout(this.timer.move);
        this.isMove = false;
      });

      this.canvas.addEventListener("click", (e) => {
        this.vector.normalize.x = (e.clientX / this.params.w) * 2.0 - 1.0;
        this.vector.normalize.y = (e.clientY / this.params.h) * -2.0 + 1.0;
        if (!this.isClickedPlane) {
          this.isClickedPlane = true;
        }
      });
    }
  }
}
