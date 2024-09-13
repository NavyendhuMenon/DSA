class HashTable {
    constructor(size = 5) {
        this.table = new Array(size);
        this.itemCount = 0;
    }

    hash(key) {
        let hashValue = 0;
        for (let char of key) {
            hashValue += char.charCodeAt();
        }
        return hashValue % this.table.length;
    }

    resize() {
        const newTable = new Array(this.table.length * 2);
        for (let bucket of this.table) {
            if (bucket) {
                for (let [key, value] of bucket) {
                    const newIndex = this.hash(key) % newTable.length;
                    if (!newTable[newIndex]) {
                        newTable[newIndex] = [];
                    }
                    newTable[newIndex].push([key, value]);
                }
            }
        }
        this.table = newTable;
    }

    set(key, value) {
        const loadFactor = this.itemCount / this.table.length;
        if (loadFactor > 0.7) {
            this.resize();
        }

        const index = this.hash(key);
        if (!this.table[index]) {
            this.table[index] = [];
        }
        this.table[index].push([key, value]);
        this.itemCount++;
    }

    get(key) {
        const index = this.hash(key);
        const bucket = this.table[index];
        if (bucket) {
            for (let [k, v] of bucket) {
                if (k === key) {
                    return v;
                }
            }
        }
        return undefined;
    }
}


const hashTable = new HashTable();
hashTable.set("apple", 50);
hashTable.set("banana", 30);
hashTable.set("orange", 60);
hashTable.set("grape", 40);
console.log(hashTable.get("grape")); 
