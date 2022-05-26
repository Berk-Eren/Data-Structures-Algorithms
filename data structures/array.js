class CustomArray {
    constructor(name) {
        this.name = name;
        this.list = new Array();
        this._length = 0;
    }

    add(val) {
        this.list.push(val);
        this._length++;
    }

    pop() {
        console.log("Pop process");
        let popped_element = this.list.pop();
        this._length--;
        
        return popped_element;
    }

    insert(index, val) {
        this.list.splice(index, 0, val);
        this._length++;
    }

    get length() {
        return this._length;
    }
}
CustomArray.prototype = Array.prototype;

array = new CustomArray();
console.log(Object.getPrototypeOf(array));

array.toString();
array.add(3);
array.add(5);
array.add(6);
console.log(array.length);
console.log(array.pop());
console.log(array.length);