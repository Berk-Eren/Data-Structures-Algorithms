class Node {
    constructor(value) {
        this.value = value;
        this.children = [];
    }
}

function Graph(node) {
    this.root = node;
    this.nodes = [node];

    this.add = function(node, child, undirected=false) {

        if (!this.root) {
            throw new ValueError("Set your root node first with 'setRoot' method.");
        }
    
        if (!node && !child) {
            throw new ValueError("Node and child objects must be defined.");
        }
        else if (!node) {
            throw new ValueError("Node object must be defined.");
        }
        else if (!child) {
            throw new ValueError("Child object must be defined.");
        }
        
        console.assert(node instanceof Node , "Your node object must be an instance of 'Node' class.");
        console.assert(child instanceof Node, "Your child object must be an instance of 'Node' class.");

        if (!node.children.includes(child)) {
            node.children.push(child);

            if (undirected)
                child.children.push(node);
        }
        
        if (!this.nodes.includes(node)) {
            this.nodes.push(node);
        }

        if (!this.nodes.includes(child)) {
            this.nodes.push(child);
        }
    };

    this.getTraversed = function() {
        order = [];
        if (this.list==undefined) {
            this.list = this.dfsTraverse();
        }

        for (let val of this.list) {
            order.push(val);
        }

        return order.toString();
    }

    this.dfsTraverse = function (topNode=this.root, list) {
        if (list===undefined) {
            list = [];
        }
        
        if (!list.includes(topNode.value)) {
            list.push(topNode.value);
        }

        for (let n of topNode.children) {
            if (!list.includes(n.value)) {
                this.dfsTraverse(n, list);
            }
        }
        
        return list;
    };
}

function createGraph() {
    root = new Node(9);
    six = new Node(6);       
    seven = new Node(7);   
    eigth = new Node(8);
    twelve = new Node(12);    
    forty_three = new Node(43);  
    one_hundred_five = new Node(105); 
    twenty_one = new Node(21);
    twenty_three = new Node(23);

    const graph = new Graph(root);

    graph.add(root, six);
    graph.add(root, seven);
    graph.add(root, eigth, undirected=true);
    
    graph.add(six, seven, undirected=true);

    graph.add(six, twelve);
    graph.add(six, forty_three, undirected=true);
    graph.add(six, one_hundred_five);

    graph.add(one_hundred_five, twenty_one);
    
    graph.add(seven, twenty_one);
    graph.add(eigth, twenty_three);

    return graph;
}

graph = createGraph();

console.log(graph.getTraversed());