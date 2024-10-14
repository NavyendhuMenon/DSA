

class Node {

    constructor(value){

        this.value = value
        this.left = null
        this.right = null
    }
}

class BinarySearchTree{

    constructor(){

        this.root = null
    }

    insert (value){

        let newNode = new Node(value)

        if(this.root === null){

            this.root = newNode
        }else{

            this.insertNewNode(this.root,newNode)
        }
    }

    insertNewNode(root, newNode){

        if(newNode.value<root.value){

            if(root.left===null){
                root.left = newNode
            }else{
                return this.insertNewNode(root.left, newNode)
            }
        }else{

            if(root.right === null){
                root.right = newNode
            }else{
                return this.insertNewNode(root.right, newNode)
            }
        }
    }

    min(root){

        if(!root.left){
            return root.value
        }else{

            return this.min(root.left)
        }
    }

    max(root){

        if(!root.right){
            return root.value
        }else{
            return this.max(root.right)
        }
    }
}


let bst = new BinarySearchTree()

bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(3)
bst.insert(7)

console.log("Max value:", bst.max(bst.root)) 
console.log("Min value:", bst.min(bst.root))
