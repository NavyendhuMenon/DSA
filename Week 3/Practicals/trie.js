

//trie


class TrieNode{

    constructor(){
        this.children = {}
        this.isEnd = false
    }
}

class Trie{

    constructor(){
        this.root = new TrieNode()
    }

    insert(word){

        let currentNode = this.root

        for(let i =0; i<word.length ; i++){
            let char = word[i]

            if(!currentNode.children[char]){

                currentNode.children[char]= new TrieNode()
            }

            currentNode = currentNode.children[char]
        }

        currentNode.isEnd = true
    }

    search(word){

        let currentNode = this.root

        for( let i =0; i<word.length ; i++){
            let char = word[i]

            if(!currentNode.children[char]){
                return false
            }

            currentNode = currentNode.children[char]
        }

        return currentNode.isEnd
    }
}


let newTrie = new Trie()

newTrie.insert("apple")
newTrie.insert("arange")
newTrie.insert("Son")
newTrie.insert("Sun")


console.log(newTrie.search("apple"));
console.log(newTrie.search("aug"));
console.log(newTrie.search("Noway"));
