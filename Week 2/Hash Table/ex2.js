class HashTable {
    constructor(size = 5) {
        this.table = new Array(size);
    }

    hash(key) {
        let hashValue = 0;
        for (let char of key) {
            hashValue += char.charCodeAt();
        }
        return hashValue % this.table.length;
    }

    set(key, value) {
        const index = this.hash(key);
        if (!this.table[index]) {
            this.table[index] = [];
        }
        // If key already exists, update it
        for (let [k, v] of this.table[index]) {
            if (k === key) {
                v = value;
                return;
            }
        }
        // Otherwise, add new key-value pair
        this.table[index].push([key, value]);
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

// Test
const hashTable = new HashTable();
hashTable.set("apple", 50);
hashTable.set("banana", 30);
hashTable.set("orange", 60);  // Possible collision
console.log(hashTable.get("apple")); 
console.log(hashTable.get("orange")); 
