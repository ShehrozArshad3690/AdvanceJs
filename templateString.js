let name ="Shehroz Arshad";
let marks= 93;
console.log(`Hello "${name}"`);
console.log(`Hello ${name} your marks is ${marks}`);
console.log(`Hello ${name} your marks is '${marks}'`);
console.log(`Hello ${name} 
            your marks is 
            '${marks}'`);



// we can also use with function name 

let fname="Alpha";
let lname="User";

function fullName(fname,lname) {
    return `${fname} ${lname}`;
}

console.log(`Hello ${fullName(fname,lname)}`);

