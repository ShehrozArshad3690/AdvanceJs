// Callbacks in JS

function show(result) {
    console.log(result);
}

function add(num1,num2,callBack) {
    let sum=num1+num2;
    callBack(sum);
}

add(90,20,show);

// Anonymous function

let sum = function (x,y) {
    console.log(`Sum is ${x+y}`);
}

sum(5,9);


setTimeout(function () {
    console.log("Welcome Here");
},2000)

// Recussive function

function count(num) {
    console.log(num);
    num--;
    if (num>0) {
        count(num);
    }
}
count(10);