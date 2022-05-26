class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.previous = null;
    }
}


class DoublyLinkedList {

    constructor(value=undefined) {
        this._length = 0;

        if (value) {
            this.root = new Node(value);
        }
        else {
            this.root = null;
        }
        
        this.last = this.root;
    }

    get size() {
        return this._length;
    }

    #getByIndex(index) {
        let node, prev;

        if (this.size==0) {
            throw new Error("The list is empty. Please append an item.");
        }

        if (this._length<=index<0) {
            throw new RangeError("Index is outside of the list.");
        }

        if (index==0)
            return [this.root, null];
        
        node = this.root;

        for (let i=0;i<index;i++) {
            prev = node;
            node = node.next;
        }

        return [prev, node];
    }

    #getByValue(value) {
        let node = this.root;
        
        if (this.root.value==value)
            return [this.root, null];
        
        while (node.next) {
            if (node.next.value==value)
                return [node, node.next];
            node = node.next;
        }

        throw new Error("Invalid value for this list");
    }

    append(value) {
        let newNode = new Node(value);
        
        if (this.size==0) {
            this.root = newNode;
            this.last = this.root;
        }
        else {
            newNode.previous = this.last;
            this.last.next = newNode;
            this.last = newNode;
        }

        this._length++;
    }

    insert(value, index) {
        let newNode = new Node(value);
        let [prev, node] = this.#getByIndex(index);

        if (!node) {
            prev.previous = newNode;
            newNode.next = prev;
            this.root = newNode;
        }
        else {
            prev.next = newNode;
            node.previous = newNode;
            
            newNode.next = node;
            newNode.previous = prev;
        }

        this._length++;
    }

    deleteByValue(value) {
        let next;
        let [prev, node] = this.#getByValue(value);
        
        if (!node) {
            next = prev.next;
            prev.next = null;
            this.root = next;

            if (!next)
                next.previous = null;
        }
        else {
            next = node.next;

            if (node==this.last) {
                this.last = prev;
            }
            else {
                next.previous = prev;
            }

            prev.next = next;
            node.next = null;
            node.previous = null;

            this._length--;
        }
    }

    clear() {
        let nextNode;
        let node = this.root;

        while(node.next){
            nextNode = node.next;
            node.previous = null;
            node.next = null;
            node = nextNode;
        }

        node.next = null;
        node.previous = null;

        this.root = null;
        this.last = null;
    }

    getFirst() {
        return this.root.value;
    }

    getLast() {
        return this.last.value;
    }

    printList() {
        if (this._size) {
            throw new Error("The list is empty.");
        }
        
        const list = [];
        let node = this.root;
        
        do {
            list.push(node.value);
            node = node.next;
        } while(node);

        return list.toString();
    }
}

dll = new DoublyLinkedList();
dll.append(12);
dll.append(23);
dll.append(45);
dll.insert(12,2);
console.assert(dll.printList()=="12,23,12,45");
dll.deleteByValue(23);
console.assert(dll.printList()=="12,12,45");
dll.append(34);
console.assert(dll.last.value==34, "Check the last part of the list.");
dll.deleteByValue(34);
console.assert(dll.printList()=="12,12,45");
console.assert(dll.last.value==45, "Check the last part of the list.");
dll.append(67);
dll.append(90);
console.assert(dll.printList()=="12,12,45,67,90");
dll.insert(7, 0);
dll.insert(8, 0);
dll.insert(56, 2);
console.assert(dll.printList()=="8,7,56,12,12,45,67,90");