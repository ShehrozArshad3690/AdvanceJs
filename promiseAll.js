let a = 20;
let prom1 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    if (a == 20) {
      console.log("First Promise");
      resolve("Equal");
    } else {
      reject("Not Equal");
    }
  }, 1000);
});

let userName = "Shehroz218";
let prom2 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    if ((userName == "Shehroz218")) {
      console.log("Second Promise");
      resolve("Logged in Successful");
    } else {
      reject("Invalid credentials");
    }
  }, 2000);
});


Promise.all([prom1, prom2]).then((result)=>{
    console.log(`Results: ${result}`);
}).catch((error)=>{
    console.log(`Errors: ${error}`);
});
