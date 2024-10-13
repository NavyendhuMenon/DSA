



class Node{

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

    insert(value){

        let newNode = new Node(value)

        if(this.root === null){
            this.root= newNode
        }else{
            this.insertNewNode(this.root,newNode)
        }
    }

    insertNewNode(root,newNode){

        if(newNode.value<root.value){

            if(root.left===null){
                root.left = newNode
            }else{
                return this.insertNewNode(root.left,newNode)
            }

        }else{
            if(root.right===null){
                root.right = newNode
            }else{

                return this.insertNewNode(root.right,newNode)
            }
        }

    }


    search(root,value){
        if(!root){
            return false
        }else{
            if(root.value === value){
                return true
            }else{

                if(value<root.value){
                    return this.search(root.left,value)
                }else{
                    return this.search(root.right, value)
                }
            }
        }
    }


    preorder(root){
        if(root){
            console.log(root.value)
            this.preorder(root.left)
            this.preorder(root.right)
        }
    }

    inorder(root){

        if(root){
            this.inorder(root.left)
            console.log(root.value)
            this.inorder(root.right)
        }
    }

    postorder(root){
        if(root){
            this.postorder(root.left)
            this.postorder(root.right)
            console.log(root.value)
        }
    }
}


let bst = new BinarySearchTree();

bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(3)
bst.insert(7)

console.log(bst.search(bst.root, 15))
console.log(bst.search(bst.root, 25))

console.log("preorder")
bst.preorder(bst.root)

console.log("inorder")
bst.inorder(bst.root)

console.log("postorder")
bst.postorder(bst.root)