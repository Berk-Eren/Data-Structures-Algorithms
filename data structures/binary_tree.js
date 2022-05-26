class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}


class BinaryTree {
    constructor(root=null) {
        this.root = root;
    }

    append(value) {
        let newNode = new Node(value);

        if (!this.root) {
            this.root = newNode;
        }
        else {
            let node = this.root;
            let inserted = false;

            while (!inserted) {
                if (value > node.value) {
                    if (node.right) {
                        node = node.right;
                    }
                    else {
                        node.right = newNode;
                        inserted = true;
                        break;
                    }
                }
                else if (value < node.value) {
                    if (node.left) {
                        node = node.left;
                    }
                    else {
                        node.left = newNode;
                        inserted = true;
                        break;
                    }
                }
                else {
                    console.log("Node is already available.");
                    break;
                }
            }
        }
    }

    #returnSmallestNode(node) {
        while(node.left){
            node = node.left;
        }

        return node;
    }

    remove(value, rootNode=this.root) {
        if (rootNode == null)
            return rootNode;

        let smallestValue;
        
        if (rootNode.value>value)
            rootNode.left = this.remove(value, rootNode.left);
        else if (rootNode.value<value)
            rootNode.right = this.remove(value, rootNode.right);
        else {
            if (rootNode.left == null) {
                return rootNode.right;
            }

            if (rootNode.right == null) {
                return rootNode.left;
            }

            smallestValue = this.#returnSmallestNode(rootNode.right);

            rootNode.value = smallestValue.value;
            rootNode.right = this.remove(smallestValue.value, rootNode.right);    
        }
        
        return rootNode;
    }

    traverse(type="inorder") {
        if (!this.root)
            return ""
        
        let data;

        switch (type) {
            case "preorder":
                data = this.#preOrder(this.root);    
                break;
            case "inorder":
                break;
            case "postorder":
                break;
        }

        return data;
    }

    #preOrder(node, list=[]) {
        list.push(node.value);
        
        if (node.left)
            this.#preOrder(node.left, list);
        if (node.right)
            this.#preOrder(node.right, list);

        return list.toString();
    }
}


bt = new BinaryTree();
bt.append(5);
bt.append(2);
bt.append(10);

console.assert(bt.traverse("preorder")=="5,2,10", "The binary tree is not ordered as expected1");
bt.remove(10);
console.assert(bt.traverse("preorder")=="5,2", "The binary tree is not ordered as expected2");
bt.append(10);
bt.remove(5);
console.assert(bt.traverse("preorder")=="10,2", "The binary tree is not ordered as expected3");



bt = new BinaryTree();
bt.append(5);
bt.append(2);
bt.append(10);
bt.append(12);
console.assert(bt.traverse("preorder")=="5,2,10,12", "The binary tree is not ordered as expected4");
bt.append(9);
console.assert(bt.traverse("preorder")=="5,2,10,9,12", "The binary tree is not ordered as expected5");
bt.remove(10);
console.assert(bt.traverse("preorder")=="5,2,12,9", "The binary tree is not ordered as expected6");
bt.remove(2);
console.assert(bt.traverse("preorder")=="5,12,9", "The binary tree is not ordered as expected7");


bt = new BinaryTree();
bt.append(5);
bt.append(2);
bt.append(10);
bt.append(12);
bt.append(9);
bt.remove(5);
console.assert(bt.traverse("preorder")=="9,2,10,12", "The binary tree is not ordered as expected8");