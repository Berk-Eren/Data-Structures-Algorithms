arr1 = [5,3,6,8,2,8,353,86,12,865,53,23,9,34,12,5,23,7,4,54,98,56,12,32,21,34];
var arr1;
var $var;


for (let i=0; i<arr1.length-1; i++) {
    for (let j=i+1; j<arr1.length; j++) {
        if (arr1[i] > arr1[j]) {
            $var = arr1[j];
            arr1[j] = arr1[i];
            arr1[i] = $var;
        }
    }
}

console.assert(arr1.toString()=="2,3,4,5,5,6,7,8,8,9,12,12,12,21,23,23,32,34,34,53,54,56,86,98,353,865", "Array could not be sorted!");


arr = [5,3,6,8,2,8,353,86,12,865,53,23,9,34,12,5,23,7,4,54,98,56,12,32,21,34];
var arr;

function sort(arr) {
    for (let i=0; i<arr.length-1; i++) {
        curr_node = arr[i];
        min_val = arr[i];
        min_ind = i;
        
        for (let j=i+1; j<arr.length; j++) {
            if (arr[j]<min_val) {
                min_val = arr[j];
                min_ind = j;
            }
        }

        arr[min_ind] = arr[i];
        arr[i] = min_val;
    }

    return arr;
}

console.assert(sort([3,2]).toString()=="2,3", "Array could not be sorted!");
console.assert(sort(arr).toString()=="2,3,4,5,5,6,7,8,8,9,12,12,12,21,23,23,32,34,34,53,54,56,86,98,353,865", "Array could not be sorted!");