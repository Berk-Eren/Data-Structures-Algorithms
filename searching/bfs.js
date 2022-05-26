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
    }

    this.getTraversed = function() {
        list = [];
        
        for (let t of this) {
            list.push(t);
        }

        return list.toString();
    }
}

Graph.prototype[Symbol.iterator] = function() {
    currNode = this.root;
    nodesToBeVisited = [this.root];
    visitedNodes = [];
    
    return {
        next: function() {
            if (nodesToBeVisited.length==0) {
                return {
                    "value": currNode.value,
                    "done": true
                }
            }
            else {
                currNode = nodesToBeVisited.shift();
                nodesToBeVisited.push(...currNode.children);
                
                visitedNodes.push(currNode);
                nodesToBeVisited = nodesToBeVisited.filter(el=>!visitedNodes.includes(el));
                
                return {
                    "value": currNode.value,
                    "done": false
                }
            }
        }
    }
}

function creategraph() {
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
    
    graph.add(six, twelve);
    graph.add(six, forty_three, undirected=true);
    graph.add(six, one_hundred_five);
    
    graph.add(seven, twenty_one);
    graph.add(eigth, twenty_three);

    return graph;
}

graph = creategraph();

console.log(graph.getTraversed());
