const gpu = new GPU({ mode: `webgl` });

const render = gpu
  .createKernel(function () {
    this.color(0, 0, 0, 1);
  })
  .setOutput([20, 20])
  .setGraphical(true);

render();

const canvas = render.getCanvas();
document.getElementsByTagName(`body`)[0].appendChild(canvas);
