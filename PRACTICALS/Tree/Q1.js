//Binary Tree Traversal: Implement Preorder, Inorder, and Postorder traversal for a binary Tree.


class Node {

    constructor (value){

        this.value = value
        this.left = null
        this.right = null
    }
}


class BinarySearchTree{

    constructor(){

        this.root = null
    }

    insert(value){

        let newNode = new Node(value)

        this.root === null ? this.root = newNode : this.insertNode(this.root, newNode)
    }

    insertNode(root, newNode){

        if(newNode.value<root.value){

            if(root.left===null){

                root.left = newNode
            }else{

                this.insertNode(root.left, newNode)
            }
        }else{

            if(root.right === null){

                root.right = newNode
            }else{

                this.insertNode(root.right , newNode)
            }
        }
    }

    preOrderTraversal(root){

        if(!root) return []

        return [root.value, ...this.preOrderTraversal(root.left),...this.preOrderTraversal(root.right)]
    }

    postOrderTraversal(root){

        if(!root) return []
        return [...this.postOrderTraversal(root.left), ...this.postOrderTraversal(root.right), root.value]
    }

    inOrderTraversal(root){

        if(!root) return []

        return [...this.inOrderTraversal(root.left), root.value, ...this.inOrderTraversal(root.right)]
    }


    isSymmetric(root){

        if (!root) return true;

        return this.isMirror(root.left, root.right)

    }

    isMirror(l,r){

        if(!l && !r) return true
        if(!l || !r || l.value !== r.value) return false

        return this.isMirror(l.left, r.right) && this.isMirror(l.right, r.left)
    }
}


let Tree = new BinarySearchTree()

Tree.insert(122)
Tree.insert(22)
Tree.insert(1)
Tree.insert(1000)
Tree.insert(6)

console.log("Pre-order Traversal:", Tree.preOrderTraversal(Tree.root));
console.log("In-order Traversal:", Tree.inOrderTraversal(Tree.root));
console.log("Post-order Traversal:", Tree.postOrderTraversal(Tree.root));

console.log(Tree.isSymmetric(Tree.root))

