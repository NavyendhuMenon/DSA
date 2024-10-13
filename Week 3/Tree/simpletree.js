class TreeNode {
    constructor(value) {
        this.value = value;
        this.children = [];
    }

    addChild(child) {
        this.children.push(child);
    }
}

// Create the root node
const root = new TreeNode("Root");

// Create child nodes
const child1 = new TreeNode("Child 1");
const child2 = new TreeNode("Child 2");

// Add child nodes to the root
root.addChild(child1);
root.addChild(child2);

// Create grandchild nodes
const grandchild1 = new TreeNode("Grandchild 1");
const grandchild2 = new TreeNode("Grandchild 2");

// Add grandchild nodes to Child 2
child2.addChild(grandchild1);
child2.addChild(grandchild2);

// Optional: Print the tree structure
function printTree(node, prefix = "") {
    console.log(prefix + node.value);
    node.children.forEach(child => printTree(child, prefix + "  "));
}

// Print the final tree
printTree(root);
