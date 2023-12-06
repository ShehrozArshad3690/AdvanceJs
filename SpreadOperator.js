//1st use of spread operator
function sum(name,...args) {                         //in this line variable with three dots(...args) is a rest operator while function declaring
    console.log(arguments);
    let total=0;
    for (const i in args) {
        total+=args[i];
    } 
    console.log(name,total);
}

let arr=[10,20,30,40];
// sum("Shehroz",arr);                                //it again concatinates the values which is an error 
sum("Shehroz",...arr);                                //in this line variable with three dots(...arr) is a spread operator while function calling

//2nd use of spread operator

let arr2=[1,2,3,4];
console.log(arr2);                       //it simply returns an array 
console.log(...arr2);                    //it returns each value of array seperatly
console.log([...arr2]);                  //it just cloning the arr2

//3rd use of spread operator

let curArray=[1,2,3,4,5];
let newArray=curArray;
curArray.push(9);
console.log(newArray);                    //it simply returns an array
console.log(...newArray);                 //it spreads the each value of array show separatly
console.log([...newArray]);              //it bounds the every spreaded values in an array(simply means cloning an array)

//4th use of spread operator

let a=[9,8,7,6];
let b=[5,4];
// let c=a.concat(b);
let c=[...a,...b];          //we can also concatinate 
c=[19,...a,...b,90];        //we can also add new elements
console.log(c);

//use of spread operator with objects for cloning

let obj1={
    name:"Shehroz",
    subject:"JavaScript",
    age:23
}
let obj2={
    ...obj1,                    //this line just cloning the existing value of obj1
    marks:97,                  //we can also add new element 
    age:25                     //we can also overwrite the existing value
}
console.log(obj2);