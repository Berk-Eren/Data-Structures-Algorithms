class HashTable {
    constructor(size=50) {
        this.size = size;
        this.table = new Array(this.size);
    }

    __hash(key) {
        let ascii = key.toString().charCodeAt();
        let length = key.toString().length;

        return (ascii*length)%this.size;
    }

    set(key, value) {
        let hashIndex = this.__hash(key);
        let hashInTable = this.table[hashIndex];

        if ((hashInTable instanceof Array)==true) {
            let keys = hashInTable.map((x, y)=>x);
            
            if (!keys.includes(key)) {
                hashInTable.push([key, value]);
            }
            else {
                throw new ReferenceError(`Key ${key} is already exist.`);
            }
        }
        else {
            this.table[hashIndex] = [[key, value]];
        }
    }

    get(key) {
        let hashIndex = this.__hash(key);
        let hashInTable = this.table[hashIndex];

        if ((hashInTable instanceof Array)==true) {
            let keys = hashInTable.map(x=>x[0]);
            
            if (keys.includes(key)) {
                let index = keys.indexOf(key);
                return hashInTable[index][1];
            }
            else {
                throw new ReferenceError(`No key called ${key}`);
            }
        }
        else {
            throw new ReferenceError(`No key called ${key}`);
        }
        
    }

    delete(key) {
        let hashIndex = this.__hash(key);
        let hashInTable = this.table[hashIndex];

        if ((hashInTable instanceof Array)==true) {
            let keys = hashInTable.map(x=>x[0]);
        
            if (keys.includes(key)) {
                let index = keys.indexOf(key);
                let deletedItem = hashInTable.splice(index, 1);

                if (hashInTable.length==0) {
                    this.table[hashIndex] = undefined;
                }

                return deletedItem[1];
            }
            else {
                throw new ReferenceError(`No key called ${key}`);
            }
        }
        else {
            throw new ReferenceError(`No key called ${key}`);
        }
    }
}


hashTable = new HashTable();
hashTable.set("Berk", 24);
hashTable.set("Şenay", 54);
console.log(hashTable.get("Şenay"));
console.log(hashTable.table);
console.log(hashTable.get("Şenay"));
hashTable.delete("Şenay");
hashTable.delete("Berk");