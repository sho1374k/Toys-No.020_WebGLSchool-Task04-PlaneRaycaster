import Stats from "three/examples/jsm/libs/stats.module";

export class SetStats {
  constructor(body = document.body) {
    this.body = body;

    this.stats = null;
    if (MODE) {
      this.stats = new Stats();

      const ele = this.stats.domElement;
      const eleStyle = ele.style;
      eleStyle.position = "fixed";
      eleStyle.top = "0px";
      eleStyle.left = "0px";
      eleStyle.right = "initial";
      eleStyle.bottom = "initial";
      eleStyle.zIndex = "9999";
      this.body.appendChild(ele);
    }
  }

  raf() {
    if (this.stats != null) this.stats.update();
  }
}
