let a = [1,2,3,4,5,6,7,8,9,10,56,78,456,3465,4567,5697,23568];


ser = a;

found = false;
number = 45647;

while (!found && ser.length>1) {
    ind = Math.floor(ser.length/2);

    if (ser[ind]==number) {
        found = true;
        console.log("Number is found");
    }
    else if (number>a[ind]) {
        ser = ser.slice(ind,);
    }
    else {
        ser = ser.slice(0,ind);
    }
}

if (!found) {
    console.error("Not found");
}