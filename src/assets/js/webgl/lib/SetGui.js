import GUI from "three/examples/jsm/libs/lil-gui.module.min";

export class SetGui {
  constructor() {
    this.gui = null;
    window.GUI = null;
    if (MODE) {
      this.gui = new GUI();
      window.GUI = this.gui;
      // this.toOpen();
    }
  }

  toOpen() {
    if (window.GUI != null) this.gui.open();
  }

  toClose() {
    if (window.GUI != null) this.gui.close();
  }
}
