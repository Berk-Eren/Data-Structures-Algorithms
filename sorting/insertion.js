arr = [5,3,6,8,2,8,353,86,12,865,53,23,9,34,12,5,23,7,4,54,98,56,12,32,21,34];

var arr;

function sort(arr) {
    arr_length = arr.length;

    for (let i=1; i<arr_length; i++) {
        min = null;

        for (let j=i-1; j>=0; j--) {
            if (arr[i]<arr[j])
                min = j;
            else 
                break;
        }
        
        if (typeof(min)=="number") {
            arr.splice(min, 0, arr.splice(i, 1)[0]);
        }
    }

    return arr;
}

console.assert(sort(arr).toString()=="2,3,4,5,5,6,7,8,8,9,12,12,12,21,23,23,32,34,34,53,54,56,86,98,353,865", "Array could not be sorted!");
console.assert(sort([3,2]).toString()=="2,3", "Array could not be sorted!");
console.assert(sort([2,3]).toString()=="2,3", "Array could not be sorted!");
console.assert(sort([1,2,1]).toString()=="1,1,2", "Array could not be sorted!");