




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
        if(this.root === null){
            this.root = newNode
        }else{
            return this.insertNode(this.root,newNode)
        }
    }
    
    insertNode(root,newNode){
        
        if(newNode.value<root.value){
            
            if(root.left===null){
                root.left = newNode
            }else{
               return this.insertNode(root.left, newNode)
            }
            
        }else{
            if(root.right === null){
                root.right =newNode
            }else{
                return this.insertNode(root.right, newNode)
            }
        }
    }
    
   search(value){
    return this.searchValue(this.root,value)
   }
    

   searchValue(root,value){

    if(root===null){
        return false
    }

    if(root.value === value){
        return true
    }

    if(root.value<value){

        return this.searchValue(root.left,value)
        
    }else{
        return this.searchValue(root.right, value)
    }
   }

   MinValue(){
    
    return this.Minimum(this.root)
   }

   Minimum(root){

    if(root=== null){
        return null
    }

    while(root.left !== null){

        root = root.left 
    }

    return root.value

   }
    
}


let bst = new BinarySearchTree()

bst.insert(100)
bst.insert(10)
bst.insert(22)
bst.insert(1000)
bst.insert(1)

console.log(bst.search(100))
console.log(bst.search(5))
console.log(bst.MinValue());

