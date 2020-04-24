const arr = [`Foo`, `Bar`, `World`];

const newNode = document.body.createElement(`div`);
arr.map((ele) => {
  newNode.append(ele);
});
