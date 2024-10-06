

class HashTable{

    constructor(size){

        this.table = new Array(size)
        this.size = size

    }

    hashfn(key){

        let total =0

        for(let i=0; i<key.length; i++){
            total+= key.charCodeAt(i)
        }

        return total % this.size
    }

    set(key,value){

        let index = this.hashfn(key)

        this.table[index] = value
    }

    get (key){
        let index = this.hashfn(key)
        return this.table[index]
    }

    remove(key){

        let index = this.hashfn(key)

        this.table[index]= undefined
    }

    display(){

        for (let i=0; i<this.size; i++){
           this.table[i]!==undefined ? console.log(`Index ${i}: ${this.table[i]}`) :  console.log(`Index ${i}: empty`);
        }
    }
}


let Hash = new HashTable(30)

Hash.set("Name", "Navyendhu")
Hash.set("Age","25")

Hash.display()