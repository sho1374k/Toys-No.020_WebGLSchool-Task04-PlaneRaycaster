// --------------------------

// scss

// --------------------------
import "../scss/app.scss";

// --------------------------

// lib

// --------------------------
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// --------------------------

// module

// --------------------------
import { Global } from "./module/Global";
import { Ua } from "./module/Ua";
import { SetPropertySize } from "./module/SetPropertySize";

// --------------------------

// WebGL

// --------------------------
import { WebGL } from "./webgl/WebGL";

// --------------------------

// windows

// --------------------------
window.MODE = process.env.NODE_ENV === "development";
window.GSAP = gsap;
window.ScrollTrigger = ScrollTrigger;
window.G = new Global();
window.addEventListener("DOMContentLoaded", (e) => {
  const BREAK_POINT = 768;
  const body = document.body,
    ua = new Ua(body);

  const params = {
    w: window.innerWidth,
    h: window.innerHeight,
    beforeWidth: window.innerWidth,
    longer: 0,
    shorter: 0,
    aspect: 0,
  };
  params.aspect = params.w / params.h;
  params.longer = params.w > params.h ? params.w : params.h;
  params.shorter = params.w < params.h ? params.w : params.h;

  const bool = {
    isMatchMediaWidth: window.matchMedia("(max-width: 768px)").matches,
    isMatchMediaHover: window.matchMedia("(hover: hover)").matches,
    isPc: ua.data.device === "pc",
    isIphone: ua.data.iphone === "iphone",
    isAndroid: ua.data.os === "android" && ua.data.device === "tablet",
    isDeve: MODE, // false
  };

  const timer = {
    resize: null,
    orientation: null,
  };

  SetPropertySize(params.w, params.h);

  const webgl = new WebGL(body, params, bool);

  const raf = () => {
    const time = performance.now() / 1000;
    webgl.raf(time);
  };

  const resize = () => {
    bool.isMatchMediaWidth = window.matchMedia("(max-width: 768px)").matches;
    params.w = window.innerWidth;
    params.h = window.innerHeight;
    params.aspect = params.w / params.h;
    params.longer = params.w > params.h ? params.w : params.h;
    params.shorter = params.w < params.h ? params.w : params.h;

    const props = {
      isMatchMediaWidth: bool.isMatchMediaWidth,
      w: params.w,
      h: params.h,
      aspect: params.aspect,
      longer: params.longer,
      shorter: params.shorter,
    };

    SetPropertySize(params.w, params.h);
    webgl.resize(props);

    clearTimeout(timer.resize);
    timer.resize = setTimeout(() => {
      const threshold = () => {
        const w = window.innerWidth;
        if (w > BREAK_POINT) if (params.beforeWidth < BREAK_POINT + 1) window.location.reload();
        if (w < BREAK_POINT + 1) if (params.beforeWidth > BREAK_POINT + 1) window.location.reload();
        params.beforeWidth = w;
      };
      threshold();
    }, 100);
  };

  const orientation = () => {
    if (window.orientation != 0) {
      if (params.w < params.h) {
        clearTimeout(timer.orientation);
        timer.orientation = setTimeout(() => {
          window.location.reload();
        }, 300);
      }
    }
  };

  webgl.init();
  GSAP.ticker.add(raf);
  GSAP.ticker.fps(30);
  resize();
  window.addEventListener("resize", resize, { passive: true });
  if (!bool.isPc) window.addEventListener("orientationchange", orientation);
  // document.fonts.ready.then((e) => {});

  // 右クリック禁止
  document.oncontextmenu = function () {
    return false;
  };
  document.getElementsByTagName("html")[0].oncontextmenu = function () {
    return false;
  };
  document.body.oncontextmenu = function () {
    return false;
  };
});
