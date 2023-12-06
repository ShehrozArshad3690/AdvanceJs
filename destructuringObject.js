//we have to use same name variables with property of object

var obj={
    name:"Shehroz",
    age:23,
    city:"Jahanian"
}

let{name,age,city}=obj;
console.log(name);
console.log(age);
console.log(city);


//if we don't want get any value so just remove that variable

// var obj={
//     name:"Shehroz",
//     age:23,
//     city:"Jahanian"
// }

// let{name,city}=obj;
// console.log(name);
// console.log(city);


//if we want to get alice(short name) of variables

// var obj={
//     name:"Shehroz",
//     age:23,
//     city:"Jahanian"
// }

// let{name:n,age:a,city:c}=obj;
// console.log(n);
// console.log(a);
// console.log(c);