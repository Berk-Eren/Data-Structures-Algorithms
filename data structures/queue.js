class Node {
    constructor(value) {
        this.root = value;
        this.next = null;
    }
}


class Queue {
    constructor(value) {
        this.root = new Node(value);
        this.last = this.root;
    }

    enqueue(value) {
        let node = new Node(value);

        this.last.next = node;
        this.last = node;
    }

    #returnNode(searchedNode) {
        if (this.root == searchedNode)
            return this.root;

        let node = this.root;

        while (node.next) {
            if (node.next==searchedNode)
                return [node, node.next]
            node = node.next;
        }

        return undefined
    }

    dequeue() {
        if (!this.root) {
            console.log("Nothing to delete");
            return
        }

        let [parent, child] = this.#returnNode(this.last);
        
        if (!parent) {
            throw new Error("No node was found.");
        }  
        
        let next = child ? child.next : null;
        this.last = next ? next : parent;
        
        parent.next = next;

        return child.value;
    }

    peek() {
        return this.last.value;
    }
}


queue = new Queue(12);
queue.enqueue(43);
queue.enqueue(39);
queue.enqueue(90);
console.log(queue.peek()==queue.dequeue());
queue.enqueue(398);
queue.enqueue(904);
console.log(queue.peek()==queue.dequeue());