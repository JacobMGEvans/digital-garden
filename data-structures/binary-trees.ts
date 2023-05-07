// Binary Trees and Traversal
// Binary Trees are trees whose nodes can only have up to two children

type BinaryNode = {
  key: number;
  left: BinaryNode | null;
  right: BinaryNode | null;
  addLeft(leftKey: number): BinaryNode;
  addRight(rightKey: number): BinaryNode;
}

export function createBinaryNode(key: number): BinaryNode {
  return {
    key,
    left: null,
    right: null,
    addLeft(leftKey: number) {
      const newLeft = createBinaryNode(leftKey);
      this.left = newLeft;
      return newLeft;
    },
    addRight(rightKey: number) {
      const newRight = createBinaryNode(rightKey);
      this.right = newRight;
      return newRight;
    },
  };
}

type BinaryTree = {
  root: BinaryNode;
  print(traversalType?: 'IN_ORDER' | 'PRE_ORDER' | 'POST_ORDER'): string;
}

/** TRAVERSALS enums for search types
 * @enum {@function(node: BinaryNode, callback: Function)}
 */
const TRAVERSALS = {
  IN_ORDER: (node: BinaryNode, visitFn: Function) => {
    if (node !== null) {
      TRAVERSALS.IN_ORDER(node.left!, visitFn);
      visitFn(node);
      TRAVERSALS.IN_ORDER(node.right!, visitFn);
    }
  },
  PRE_ORDER: (node: BinaryNode, visitFn: Function) => {
    if (node !== null) {
      visitFn(node);
      TRAVERSALS.PRE_ORDER(node.left!, visitFn);
      TRAVERSALS.PRE_ORDER(node.right!, visitFn);
    }
  },
  POST_ORDER: (node: BinaryNode, visitFn: Function) => {
    if (node !== null) {
      TRAVERSALS.POST_ORDER(node.left!, visitFn);
      TRAVERSALS.POST_ORDER(node.right!, visitFn);
      visitFn(node);
    }
  },
};

export function createBinaryTree(rootKey: number): BinaryTree {
  const root = createBinaryNode(rootKey);

  return {
    root,
    print(traversalType: 'IN_ORDER' | 'PRE_ORDER' | 'POST_ORDER' = 'IN_ORDER'): string {
      let result = '';

      const visit = (node: BinaryNode) => {
        result += result.length === 0 ? node.key : `=> ${node.key}`;
      };

      TRAVERSALS[traversalType](this.root, visit);

      return result;
    },
  };
}


// const tree = createBinaryTree(`a`);
// const b = tree.root.addLeft(`b`);
// const c = tree.root.addRight(`c`);
// const d = b.addLeft(`d`);
// const e = b.addRight(`e`);
// const f = c.addLeft(`f`);
// const g = c.addRight(`g`);
// const h = d.addLeft(`h`);
// const i = d.addRight(`i`);

// // print takes in enums for search types
// console.log(tree.print(`POST_ORDER`));
