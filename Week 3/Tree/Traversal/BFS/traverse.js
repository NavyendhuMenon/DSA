



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

    levelOrder(){
        const queue =[]
        queue.push(this.root)

        while(queue.length){
            let curr = queue.shift()
            console.log(curr.value);
            if(curr.left){
                queue.push(curr.left)
            }

            if(curr.right){
                queue.push(curr.right)
            }
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


console.log("levelorder")
bst.levelOrder()

