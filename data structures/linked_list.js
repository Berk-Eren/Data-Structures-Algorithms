class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(root) {
        this.root = new Node(root);
        this.last = this.root;
    }

    append(value) {
        let node = new Node(value);
        this.last.next = node;
        this.last = node;
    }

    prepend(value) {
        let node = new Node(value);
        node.next = this.root;
        this.root = node;
    }

    #getByValue(value) {
        let node = this.root;
        
        if (this.root.value==value) {
            return [node, undefined];
        }

        while(node.next) {
            if (node.next.value==value)
                return [node, node.next];
            node = node.next;
        }

        return [undefined, undefined];
    }

    #getByIndex(indexNumber) {
        let prev;
        let index = 0;
        let node = this.root;

        if (indexNumber==0)
            return [node, undefined];

        while(node.next) {
            index++;
            prev = node;
            node = node.next;

            if (index==indexNumber)
                return [prev, node];
        }

        return [undefined, undefined];
    }

    insert(value, index) {
        let newNode = new Node(value);
        
        if (index<=0){
            newNode.next = this.root;
            this.root = newNode;

            return;
        }

        let [parent, child] = this.#getByIndex(index);

        if (!parent) {
            this.last.next = newNode;
        }
        else {
            parent.next = newNode;
            newNode.next = child ? child : null;
        }
    }

    deleteByValue(value) {
        let [parent, child] = this.#getByValue(value);

        if (!parent) {
            console.log("No such value!");
            return
        }
        else if (child==undefined) {
            this.root = parent.next;
            parent.next = null;
            return
        }

        let next = child ? child.next : null;
        parent.next = next;

        if (next==null) {
            this.last = parent;
        }
    }

    traverse() {
        let list = [];
        let node = this.root;

        do{
            list.push(node.value);
            node = node.next;
        } while(node);

        console.log(list.toString());
    }
}

ll = new LinkedList(5);
ll.append(4);
ll.append(8);
ll.append(2);
ll.traverse();
ll.insert(16,2);
ll.traverse();
ll.insert(16,89);
ll.traverse();
ll.insert(45,0);
ll.traverse();
ll.deleteByValue(45);
ll.traverse();
ll.deleteByValue(16);
ll.traverse();