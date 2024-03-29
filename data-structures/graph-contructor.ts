import { createQueue } from "./queue-data-structure";
type Node = {
  key: string;
  neighbors: Node[];
  addNeighbor(node: Node): void;
};

type Graph = {
  directed: boolean;
  nodes: Node[];
  edges: string[];

  addNode(key: string): void;
  getNode(key: string): Node | undefined;
  addEdge(node1key: string, node2key: string): void;
  print(): string;

  breadthFirstSearch(startingNodeKey: string, visitFn: (node: Node) => void): void;
  depthFirstSearch(startingNodeKey: string, visitFn: (node: Node) => void): void;
};

const createNode = (key: string): Node => {
  const neighbors: Node[] = [];
  return {
    key,
    neighbors,
    addNeighbor(node) {
      neighbors.push(node);
    },
  };
};

export const createGraph = (directed = false): Graph => {
  const nodes: Node[] = [];
  const edges: string[] = [];
  return {
    directed,
    nodes,
    edges,

    addNode(key) {
      nodes.push(createNode(key));
    },

    getNode(key) {
      return nodes.find(node => node.key === key);
    },

    addEdge(node1key, node2key) {
      const node1 = this.getNode(node1key);
      const node2 = this.getNode(node2key);

      if (!node1 || !node2) {
        throw new Error('Both nodes need to be in the graph');
      }

      node1.addNeighbor(node2);
      edges.push(`${node1key}-${node2key}`);

      if (!directed) {
        node2.addNeighbor(node1);
      }
    },

    print() {
      return nodes
        .map(({ key, neighbors }) => {
          let result = key;

          if (neighbors.length) {
            result += ` => ${neighbors.map(neighbor => neighbor.key).join(` `)}`;
          }

          return result;
        })
        .join(`\n`);
    },

    breadthFirstSearch(startingNodeKey, visitFn) {
      const startingNode = this.getNode(startingNodeKey);

      if (!startingNode) {
        throw new Error('Node not found');
      }

      const visited: { [key: string]: boolean } = {};
      const queue = createQueue<Node>();
      queue.enqueue(startingNode);

      while (!queue.isEmpty()) {
        const currentNode = queue.dequeue();
        if (!currentNode) return;

        if (!visited[currentNode.key]) {
          visitFn(currentNode);
          visited[currentNode.key] = true;
        }

        currentNode.neighbors.forEach(node => {
          if (!visited[node.key]) {
            queue.enqueue(node);
          }
        });
      }
    },

    depthFirstSearch(startingNodeKey, visitFn) {
      const startingNode = this.getNode(startingNodeKey);

      if (!startingNode) {
        throw new Error('Node not found');
      }

      const visited: { [key: string]: boolean } = {};

      function explore(node: Node) {
        if (visited[node.key]) {
          return;
        }

        visitFn(node);
        visited[node.key] = true;

        node.neighbors.forEach(node => explore(node));
      }

      explore(startingNode);
    },
  };
};



// //! depthfirst search dummy data - works!
// const graph = createGraph(true);
// const nodes = [`a`, `b`, `c`, `d`, `e`, `f`];
// const edges = [
//   [`a`, `b`],
//   [`a`, `e`],
//   [`a`, `f`],
//   [`b`, `d`],
//   [`b`, `e`],
//   [`c`, `b`],
//   [`d`, `c`],
//   [`d`, `e`],
// ];
// nodes.forEach(node => graph.addNode(node));
// edges.forEach(allNodes => graph.addEdge(...allNodes));
// graph.depthFirstSearch(`a`, node => {
//   console.log(node.key);
// });

// //! Checking if the graph factory - works!
const graph = createGraph(true);
graph.addNode(`Jacob`);
graph.addNode(`Child`);
graph.addNode(`Partner`);
graph.addNode(`Takun`);
graph.addEdge(`Jacob`, `Partner`);
graph.addEdge(`Jacob`, `Child`);
graph.addEdge(`Partner`, `Child`);
graph.addEdge(`Partner`, `Takun`);
graph.addEdge(`Child`, `Takun`);
console.log(graph.print());
