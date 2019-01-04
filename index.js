const gpujs = require(`gpu.js`);
const gpu = new gpujs();

gpu
  .createKernel(function () {
    this.color(this.thread.x / 500, this.thread.y / 500, 0.4, 1);
  })
  .setOutput([500, 500])
  .setGraphical(true);

gpu();

const canvas = gpu.getCanvas();

document.getElementById(`root`).append(canvas);
