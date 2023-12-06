// 1st use of object literals

let name="Shehroz";
let course="JavaScript";

var obj={
    // name:name,
    // course:course
    //if property name and variable name is same we can only declare it once, compiler makes its property itself with the same name
    name,
    course
}

console.log(obj);

// 2nd use of object literals

let fname="Shehroz";
var obj1={
    [fname+"Arshad"]:"Saman",                       //if we want to use value of variable as a property and concatinate with a new value
    age:23
}
console.log(obj1);
console.log(obj1.ShehrozArshad);

//3rd use of object literals

let myname="Shehroz";
var obj2={
    [myname]:"Saman",                              //if we want to use value of variable as a property
    age:23
}
console.log(obj2);
console.log(obj2.Shehroz);

//4th way

let n="Student";
var obj3={
    [n+"name"]:"Shehroz Arshad",
    age:23,
    // details:function () {
    //     return `${this.Studentname} ${this.age}`;
    // }
    details () {
        return `${this.Studentname} ${this.age}`;              //string template
    }
}
// console.log(obj3.details());
console.log(obj3['details']());


//5th way

let newName="Saman";
let newAge=25;
function show(newName,newAge) {
    return {newName,newAge};
}
console.log(show(newName,newAge));

// another example

let newfname="Shehroz";
let newlname="Arshad";
let myNewage=23;
function info(newfname,newlname,myNewage) {
    let fullName=`${newfname} ${newlname}`;                         //string literal/string template
    return {fullName,myNewage};                                     //object literal
}
let finalObj=info(newfname,newlname,myNewage);
// console.log(typeof finalObj);
console.log(finalObj);
console.log(finalObj.fullName);