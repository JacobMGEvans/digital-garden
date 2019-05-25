import { getEnabledCategories } from "trace_events";

const createNode = key => {
  const neighbors = [];

  return {
    key,
    neighbors,
    addNeighbor(node) {
      neighbors.push(node);
    },
  };
};

const createGraph = (directed = false) => {
  const nodes = [];
  const edges = [];
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
            result += ` => ${neighbors
              .map(neighbor => neighbor.key)
              .join(` `)}`;
          }
          return result;
        })
        .join(`\n`);
    },
  };
};
const graph = createGraph(true);
graph.addNode(`Jacob`);
graph.addNode(`Child`);
graph.addNode(`Partner`);
graph.addNode(`Takun`);
graph.addEdge(`Jacob`, `Partner`);
graph.addEdge(`Jacob`, `Child`);
graph.addEdge(`Partner`, `Takun`);
graph.addEdge(`Child`, `Takun`);
console.log(graph.print());

// Breadth First Search
function breadthFirstSearch(startingNodeKey, visitFN) {
  const startingNode = this.getNode(startingNodeKey);
  const visited = nodes.reduce((acc, node) => {
    acc[node.key] = false;
    return acc;
  }, {});
  const queue = createQueue();
  queue.enqueue(startingNode);

  while (!queue.isEmpty()) {
    const currentNode = queue.dequeue();

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
}
