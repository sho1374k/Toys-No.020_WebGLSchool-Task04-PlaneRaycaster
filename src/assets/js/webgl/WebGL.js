// --------------------------

// lib

// --------------------------
import { SetControls } from "./lib/SetControls";
import { SetStats } from "./lib/SetStats";
import { SetGui } from "./lib/SetGui";

// --------------------------

// module

// --------------------------
import { Stage } from "./Stage";
import { Mesh } from "./Mesh";

export class WebGL {
  constructor(body, params, bool) {
    // props
    this.body = body;
    this.params = params;
    this.bool = bool;

    // bool
    this.isInit = false;

    // lib
    this.gui = new SetGui();
    this.stats = new SetStats(body);

    // module
    this.stage = new Stage(params, bool);
    this.mesh = new Mesh(body, params, bool, this.stage);
    this.controls = new SetControls(this.stage);
  }

  raf(time) {
    if (this.isInit) {
      this.mesh.raf(time);
      this.stage.raf();
      this.controls.update();
      this.stats.raf();
    }
  }

  resize(props) {
    if (this.isInit) {
      this.bool.isMatchMediaWidth = props.isMatchMediaWidth;
      this.params.w = props.w;
      this.params.h = props.h;
      this.params.aspect = props.aspect;
      this.params.shorter = props.shorter;
      this.params.longer = props.longer;

      this.mesh.resize(props);
      this.stage.resize(props);
    }
  }

  init() {
    console.log("🚀 ~ WebGL");
    this.isInit = true;
  }
}
