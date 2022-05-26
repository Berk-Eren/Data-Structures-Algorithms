class Graph {
    constructor() {
        this.edges = {};
        this.nodes = [];
    }

    addNode(node) {
        node = node.toString();

        if (!this.nodes.includes(node)) {
            this.nodes.push(node);
        }
    }

    addEdge(n1, n2) {
        n1 = n1.toString();
        n2 = n2.toString();

        if (!this.edges.hasOwnProperty(n1)) {
            this.edges[n1] = [n2];
        }
        else
            this.edges[n1].push(n2);

        this.addNode(n2);
    }

    printNodes() {
        console.log(this.nodes.toString());
    }

    printEdges() {
        console.log(this.edges);
        for (let key in this.edges) {
            console.log(key, this.edges[key]);
        }
    }
}

graph = new Graph();

graph.addNode(0);
graph.addNode(1);
graph.addNode(2);
graph.addNode(3);

graph.addEdge(3,4);
graph.addEdge(9,8);

graph.printNodes();
graph.printEdges();