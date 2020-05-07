class Node {
    constructor(data, left, right) {
        this.data = data;
        this.left = left;
        this.right = right;
    }

    show() {
        return this.data;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    insert(data) {
        var n = new Node(data, null, null);
        if (this.root == null) {
            this.root = n;
        } else {
            var current = this.root;
            var parent;
            while (true) {
                parent = current;
                if (data < current.data) {
                    current = current.left;
                    if (current == null) {
                        parent.left = n;
                        break;
                    }
                } else {
                    current = current.right;
                    if (current == null) {
                        parent.right = n;
                        break;
                    }
                }
            }
        }
    }

    inOrder(node) {
        if (node != null) {
            this.inOrder(node.left);
            console.log(node.show());
            this.inOrder(node.right);
        }
    }

    preOrder(node) {
        if (node != null) {
            console.log(node.show());
            this.preOrder(node.left);
            this.preOrder(node.right);
        }
    }

    postOrder(node) {
        if (node != null) {
            this.postOrder(node.left);
            this.postOrder(node.right);
            console.log(node.show());
        }
    }

    getMin() {
        var current = this.root;
        while (current != null) {
            current = current.left;
        }
        return current.data;
    }

    getMax() {
        var current = this.root;
        while (current != null) {
            current = current.right;
        }
        return current.data;
    }

    find(data){
        var current = this.root;
        while (current != null) {
            if (current.data == data){
                return current;
            }else if (data<current.data){
                current = current.left;
            }else if (data>current.data){
                current = current.right;
            }
        }
        return null;
    }
}

function test() {
    var nums = new BST();
    nums.insert(23);
    nums.insert(45);
    nums.insert(16);
    nums.insert(37);
    nums.insert(3);
    nums.insert(99);
    nums.insert(22);
    console.log("Inorder traversal: ");
    nums.inOrder(nums.root);

    console.log("Preorder traversal: ");
    nums.preOrder(nums.root);

    console.log("Postorder traversal: ");
    nums.postOrder(nums.root);

    var min = nums.getMin();
    console.log("The minimum value of the BST is: " + min);

    var max = nums.getMax();
    console.log("The maximum value of the BST is: " + max);
}

test();