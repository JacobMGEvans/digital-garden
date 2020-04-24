const arr = [`Foo`, `Bar`, `World`];

const bodyNode = document.body;
const newNode = document.createElement(`div`);
const breakNode = document.createElement(`br`);
arr.map((ele) => {
  bodyNode.appendChild(newNode).appendChild(breakNode);
  newNode.append(ele);
});
