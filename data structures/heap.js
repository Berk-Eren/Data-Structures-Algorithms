function Operator(operatorName) {
    if (!["greater", "lower", "equal"].includes(operatorName))
        throw new TypeError(`The value ${operatorName} is not valid.`)

    if (operatorName=="greater")
        return (a,b) => a>b;
    else if (operatorName=="lower")
        return (a,b) => a<b;
    else
        return (a,b) => a==b;
}

function GetChildNode(heapType) {
    if (!["max", "min"].includes(heapType))
        throw new TypeError(`The value ${operatorName} is not valid.`)

    if (heapType=="max")
        return Math.max;
    else if (heapType=="min")
        return Math.min;
}


class Heap {
    constructor(type="max") {
        this.array = [];
        this.type = type;
        this.operator = type=="max" ? "greater" : "lower";
    }

    add(val) {
        let operator = new Operator(this.operator);
        this.array.push(val);
        
        let val_index = this.array.length;
        let parent_index = Math.floor(val_index/2);

        while (!parent_index<=0) {
            if (operator(this.array[val_index-1], this.array[parent_index-1])) {
                this.#swap(parent_index-1, val_index-1);
            }

            val_index = parent_index;
            parent_index = Math.floor(val_index/2);
        }

        console.log(`${val} was succesfully added.`);
    }

    #swap(ind_a, ind_b) {
        let temp = this.array[ind_a];
        this.array[ind_a] = this.array[ind_b];
        this.array[ind_b] = temp;
    }

    remove() {
        let child_index;
        let operator = new Operator(this.operator);
        let childComparison = GetChildNode("max");

        if (Object.keys(this.array).length==0)
            throw new RaiseError("The array is emtpy")
            

        this.array.splice(0, 1, ...this.array.splice(this.array.length-1, 1)); // Remove topmost element
        
        let parent_index = 1;

        if (this.array[parent_index*2-1]) {
            if (this.array[parent_index*2]) {
                child_index = operator(this.array[parent_index*2-1], this.array[parent_index*2]) ? parent_index*2 : parent_index*2+1;
            }
            else {
                child_index = parent_index*2-1;
            }
        }
        else {
            return;
        }

        while (child_index<=this.array.length) {
            if (operator(this.array[child_index-1], this.array[parent_index-1])) {
                this.#swap(parent_index-1, child_index-1);
            
                parent_index = child_index;

                if (this.array[parent_index*2-1]) {
                    if (this.array[parent_index*2]) {
                        child_index = operator(this.array[parent_index*2-1], this.array[parent_index*2]) ? parent_index*2 : parent_index*2+1;
                    }
                    else {
                        child_index = parent_index*2-1;
                    }
                }
                else {
                    return;
                }
            }
            else {
                return;
            }
        }
    }
}

let heap;
heap = new Heap();
heap.add(7);
heap.add(8);
console.assert(heap.array.toString()=="8,7", "The add process is not working properly.");
heap.add(9);
console.assert(heap.array.toString()=="9,7,8", "The add process is not working properly.");

heap = new Heap();
heap.add(5);
console.assert(heap.array.toString()=="5", "The add process is not working properly.");
heap.add(5);
console.assert(heap.array.toString()=="5,5", "The add process is not working properly.");
heap.add(15);
console.assert(heap.array.toString()=="15,5,5", "The add process is not working properly.");
heap.add(64);
console.assert(heap.array.toString()=="64,15,5,5", "The add process is not working properly.");
heap.add(50);
console.assert(heap.array.toString()=="64,50,5,5,15", "The add process is not working properly.");
heap.remove();
console.assert(heap.array.toString()=="50,15,5,5", "The remove process is not working properly.");


heap = new Heap("min");
heap.add(7);
heap.add(8);
console.assert(heap.array.toString()=="7,8", "The add process is not working properly.");
heap.add(9);
console.assert(heap.array.toString()=="7,8,9", "The add process is not working properly.");
heap.add(10);
heap.add(11);
heap.add(12);
heap.add(13);
console.assert(heap.array.toString()=="7,8,9,10,11,12,13", "The add process is not working properly.");
heap.remove();
console.assert(heap.array.toString()=="8,10,9,13,11,12", "The add process is not working properly.");
heap.remove();
console.assert(heap.array.toString()=="9,10,12,13,11", "The add process is not working properly.");


heap = new Heap("min");
heap.add(6);
heap.add(14);
heap.add(42);
heap.add(78);
heap.add(18);
heap.add(47);
heap.add(45);
heap.add(83);
heap.add(91);
heap.add(81);
heap.add(77);
heap.add(84);
heap.add(99);
heap.add(64);
heap.add(53);
console.assert(heap.array.toString()=="6,14,42,78,18,47,45,83,91,81,77,84,99,64,53", "The add process is not working properly.");
heap.remove();
console.assert(heap.array.toString()=="14,18,42,78,53,47,45,83,91,81,77,84,99,64", "The add process is not working properly.");