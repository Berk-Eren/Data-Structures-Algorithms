class Node {
    constructor(value) {
        this.value = value; //
        this.next = null;
    }
}


class Stack {
    constructor(rootNode) {
        this.root = new Node(rootNode);
        this.last = this.root;
    }
    
    isEmpty() {
        if (this.root==null)
            return True; //
        return False
    }

    push(value) {
        let node = new Node(value);

        this.last.next = node;
        this.last = node;
    }

    #returnNode(searchedNode) {
        
        if (this.root==searchedNode)
            return this.root
        
        let node = this.root;

        while(node.next) {
            if (node.next==searchedNode)
                return [node, node.next]
            node = node.next;
        }

        return undefined
    }

    pop() {
        if (this.root==null) {
            throw new ValueError("The stack is empty.");
        }

        let [parent, child] = this.#returnNode(this.last);
        
        if (!parent) {
            throw new Error("No such value!");
        }
        
        let next = child ? child.next : null;
        this.last = next ? next : parent;

        parent.next = next;
        let value = child.value;

        return value;
    }

    peek() {
        return this.last.value;
    }
}

stack = new Stack(12);
stack.push(34);
stack.push(44);
stack.push(23);
console.log(stack.peek()==stack.pop());

stack.push(564);
stack.push(237);
console.log(stack.peek()==stack.pop());