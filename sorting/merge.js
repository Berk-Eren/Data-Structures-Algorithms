function sort(arr1, arr2) {
    let arr = [];

    while (arr1.length!=0 || arr2.length!=0) {
        if (arr1.length==0) {
            arr = arr.concat(arr2);
            return arr;
        }
        else if (arr2.length==0) {
            arr = arr.concat(arr1);
            return arr;
        }
        else {
            if (arr1[0] == arr2[0]){
                arr = arr.concat(arr1.splice(0,1)).concat(arr2.splice(0,1));
            }
            else if (arr1[0] > arr2[0]) {
                arr = arr.concat(arr2.splice(0,1));
            }
            else {
                arr = arr.concat(arr1.splice(0,1));
            }
        }
    }

    return arr;
}

function merge(arr) {
    if (arr.length==1) {
        return arr;
    }

    middlePoint = Math.floor(arr.length/2);

    let array1 = arr.slice(0,middlePoint);
    let array2 = arr.slice(middlePoint);

    return sort(
        merge(array1),
        merge(array2)
    );
}

my_arr = [5,3,6,8,2,8,353,86,12,865,53,23,9,34,12,5,23,7,4,54,98,56,12,32,21,34];
arr_new = merge(my_arr);

console.assert(arr_new.toString()=="2,3,4,5,5,6,7,8,8,9,12,12,12,21,23,23,32,34,34,53,54,56,86,98,353,865", "Array could not be sorted!");