class TreeNode {
    constructor(value) {
        this.value = value;
        this.children = [];
    }

    addChild(child) {
        this.children.push(child);
    }
}

class Tree {
    constructor() {
        this.root = null;
    }

    addRoot(value) {
        this.root = new TreeNode(value);
    }

    countNodes(node = this.root) {
        if (!node) return 0;
        let count = 1
        for (const child of node.children) {
            count += this.countNodes(child)
        }
        return count;
    }

    height(node = this.root) {
        if (!node) return -1
        let maxHeight = -1;
        for (const child of node.children) {
            maxHeight = Math.max(maxHeight, this.height(child));
        }
        return maxHeight + 1
    }

    dfs(node = this.root, result = []) {
        if (node) {
            result.push(node.value)
            for (const child of node.children) {
                this.dfs(child, result)
            }
        }
        return result;
    }

    findLeafNodes(node = this.root, leaves = []) {
        if (!node) return leaves
        if (node.children.length === 0) {
            leaves.push(node.value)
        }
        for (const child of node.children) {
            this.findLeafNodes(child, leaves)
        }
        return leaves;
    }
}


const myTree = new Tree();
myTree.addRoot(1);
const childA = new TreeNode(2);
const childB = new TreeNode(3);
myTree.root.addChild(childA);
myTree.root.addChild(childB);
childA.addChild(new TreeNode(4));

// console.log("Number of nodes:", myTree.countNodes())
// console.log("Height of the tree:", myTree.height())
// console.log("DFS Traversal:", myTree.dfs())
console.log("Leaf Nodes:", myTree.findLeafNodes())