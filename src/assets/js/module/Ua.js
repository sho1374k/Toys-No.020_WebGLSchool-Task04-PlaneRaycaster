export class Ua {
  constructor(body) {
    this.body = body;
    this.bodyClassList = this.body.classList;
    this.ua = window.navigator.userAgent.toLowerCase();
    this.data = {
      browser: "",
      os: "",
      device: "",
      iphone: "",
    };

    this.checkBrowser();
    this.checkOs();
    this.checkDevice();
    this.checkiPhone();
  }

  checkBrowser() {
    if (this.ua.indexOf("edge") !== -1 || this.ua.indexOf("edga") !== -1 || this.ua.indexOf("edgios") !== -1) {
      console.log("🚀 ~ This is Edge");
      this.data.browser = "edge";
    } else if (this.ua.indexOf("opera") !== -1 || this.ua.indexOf("opr") !== -1) {
      console.log("🚀 ~ This is Opera");
      this.data.browser = "opera";
    } else if (this.ua.indexOf("samsungbrowser") !== -1) {
      console.log("🚀 ~ This is SamsungInternetBrowser");
      this.data.browser = "samsung";
    } else if (this.ua.indexOf("ucbrowser") !== -1) {
      console.log("🚀 ~ This is UcBrowser");
      this.data.browser = "uc";
    } else if (this.ua.indexOf("chrome") !== -1 || this.ua.indexOf("crios") !== -1) {
      console.log("🚀 ~ This is Chrome");
      this.data.browser = "chrome";
    } else if (this.ua.indexOf("firefox") !== -1 || this.ua.indexOf("fxios") !== -1) {
      console.log("🚀 ~ This is Firefox");
      this.data.browser = "firefox";
    } else if (this.ua.indexOf("safari") !== -1) {
      console.log("🚀 ~ This is Safari");
      this.data.browser = "safari";
    } else if (this.ua.indexOf("msie") !== -1 || this.ua.indexOf("trident") !== -1) {
      console.log("🚀 ~ This is IE");
      this.data.browser = "ie";
      alert("このブラウザは現在サポートされておりません。");
    } else {
      console.log("🚀 ~ This is An unknown browser");
      this.data.browser = "";
    }

    if (this.data.browser != "") this.bodyClassList.add(this.data.browser);
  }

  checkOs() {
    if (this.ua.indexOf("windows nt") !== -1) {
      console.log("🚀 ~ This is Windows");
      this.data.os = "windows";
    } else if (this.ua.indexOf("android") !== -1) {
      console.log("🚀 ~ This is Android");
      this.data.os = "android";
    } else if (this.ua.indexOf("iphone") !== -1 || this.ua.indexOf("ipad") !== -1) {
      console.log("🚀 ~ This is iOS");
      this.data.os = "ios";
    } else if (this.ua.indexOf("mac os x") !== -1) {
      console.log("🚀 ~ This is macOS");
      this.data.os = "macos";
    } else {
      console.log("🚀 ~ This is An unknown OS");
      this.data.os = "";
    }

    if (this.data.os != "") this.bodyClassList.add(this.data.os);
  }

  checkDevice() {
    if (this.ua.indexOf("iphone") !== -1 || (this.ua.indexOf("android") !== -1 && this.ua.indexOf("Mobile") > 0)) {
      console.log("🚀 ~ This is Mobile");
      this.data.device = "mobile";
    } else if (this.ua.indexOf("ipad") !== -1 || this.ua.indexOf("android") !== -1) {
      console.log("🚀 ~ This is Tablet");
      this.data.device = "tablet";
    } else if (this.ua.indexOf("ipad") > -1 || (this.ua.indexOf("macintosh") > -1 && "ontouchend" in document)) {
      console.log("🚀 ~ This is iPad");
      this.data.device = "tablet";
    } else {
      console.log("🚀 ~ This is PC");
      this.data.device = "pc";
    }

    if (this.data.device != "") this.bodyClassList.add(this.data.device);
  }

  checkiPhone() {
    if (this.ua.indexOf("iphone") !== -1) {
      console.log("🚀 ~ This is iPhone");
      this.data.iphone = "iphone";
    } else {
      this.data.iphone = "";
    }

    if (this.data.iphone != "") this.bodyClassList.add(this.data.iphone);
  }
}
