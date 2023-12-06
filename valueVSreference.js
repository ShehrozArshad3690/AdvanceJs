let a=1;
let b=1;

console.log(a===b);             // returns true becase of same value

let x=[1];
let y=[1];

console.log(x===y);             // returns false because of different address although they have same value


let person1={skill:"Cooking"};
let person2={skill:"Cooking"};

console.log(person1===person2)      // returns false because of different address although they have same value





let first=8;
let second=first;                       // second has (reference) of first not (value)
console.log(first);                     // pointing to its reference
console.log(second);                    // pointing to reference of first
first=4;
console.log(first);                     // pointing to its new reference
console.log(second);                    // pointing to old reference of first