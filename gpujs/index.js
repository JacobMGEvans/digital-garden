import GPU from "gpu.js";

// const gpu = new GPU({ mode: `webgl` });

const canvas = window.DOM.canvas(500, 500);
const gl = canvas.getContext(`webgl2`, { premultipliedAlpha: false });

const gpu = new GPU({
  canvas,
  webGl: gl,
});
const krender = gpu
  .createKernel(function (x) {
    this.color(this.thread.x / 500, this.thread.y / 500, x[0], x[1]);
  })
  .setOutput([500, 500])
  .setGraphical(true);

// const canvas = render.getCanvas();
// document.getElementsByTagName(`body`)[0].appendChild(canvas);
