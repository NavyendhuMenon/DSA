
class Node{

    constructor(value){

        this.value= value
        this.left = null
        this.right= null
    }

}


class BinarySearchTree{

    constructor(){
        this.root = null
    }

    isEmpty(){
        return this.root===null
    }

    insert(value){
        let newNode = new Node(value)

        if(this.isEmpty()){
            this.root = newNode
        }else{

            this.insertNode(this.root, newNode)
        }

    }

    insertNode(root,newNode) {
        if(newNode.value< root.value){
            if(root.left ===null){
              root.left = newNode
            }else{
                this.insertNode(root.left,newNode)
            }
        }else{
            if(root.right === null){
                root.right = newNode
            }else{
                this.insertNode(root.right,newNode)
            }
        }
    }
}


let bst = new BinarySearchTree()

console.log('Tree is Empty', bst.isEmpty())

bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(20)


console.log('Tree is Empty after insertions:', bst.isEmpty())