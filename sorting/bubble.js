arr = [5,3,6,8,2,8,353,86,12,865,53,23,9,34,12,5,23,7,4,54,98,56,12,32,21,34];

var arr;
const arr2 = [...arr];
let $var;

function sort(arr) {
    const arr_length = arr.length;

    for (let i=arr_length-1; i>0; i--) {
        for (let j=0; j<i; j++) {
            if (arr[j]>arr[j+1]) {
                $var = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = $var;
            }
        }
    }

    return arr;
}


console.assert(sort(arr).toString()=="2,3,4,5,5,6,7,8,8,9,12,12,12,21,23,23,32,34,34,53,54,56,86,98,353,865", "Array could not be sorted!");
console.assert(arr2.toString()!="2,3,4,5,5,6,7,8,8,9,12,12,12,21,23,23,32,34,34,53,54,56,86,98,353,865", "Array2 is not sorted!");

console.assert(arr!=arr2, "Arrays are the same!");

arr2.sort(function(a,b){return a-b});
console.assert(arr2.toString()=="2,3,4,5,5,6,7,8,8,9,12,12,12,21,23,23,32,34,34,53,54,56,86,98,353,865", "Array could not be sorted!");
console.assert(sort([3,2]).toString()=="2,3", "Array 3 could not be sorted!");