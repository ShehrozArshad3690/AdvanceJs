let user=["Shehroz",23,"Jahanian"];
let [name,age,city]=user;
console.log(name);
console.log(age);
console.log(city);


// if we don't assign the value in user array it will simply return us undefined

// let user=["",23,"Jahanian"];
// let [name,age,city]=user;
// console.log(name);
// console.log(age);
// console.log(city);

// if we want to assign the default value for any undefined value of parameter

// let user=["Shehroz",,"Jahanian"];
// let [name,age=20,city]=user;
// console.log(name);
// console.log(age);
// console.log(city);

//Example of function

// function user() {
//     return ['Hammad',18,"Multan"];
// }
// let [name,age,city]=user();
// // console.log(user())
// console.log(name);
// console.log(age);
// console.log(city);


//Example 2

// let user2=["Shehroz",23,"Jahanian",["Male",35000]];
// let [name,age=20,city,[gender,salary]]=user2;
// console.log(name);
// console.log(age);
// console.log(city);
// console.log(gender);
// console.log(salary);

//using rest operator

// let user=["Shehroz",23,"Jahanian"];
// let [name,...args]=user;
// console.log(name);
// console.log(args);

//using function

// function user([name = "Unknown", age = 20, city = "Unknown"]) {
//   console.log(name);
//   console.log(age);
//   console.log(city);
// }

// user(["Saman",25,"Jahanian"]);

