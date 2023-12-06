//// 1st Example////////////

// let check=true;

// let prom =new Promise(function (resolve,reject) {
//     if (check) {
//         resolve("correct name");
//     }else{
//         reject("Wrong name");
//     }
// });
// console.log(prom);

/////// 2nd Example////////

// let name ="Shehroz";

// let prom=new Promise(function (resolve,reject) {
//     if (name=="Shehroz") {
//         resolve("Correct Name");
//     } else {
//         reject("Wrong Name");
//     }
// });
// function onFulfilment(result) {
//     console.log(result);
// };
// function onRejection(error) {
//     console.log(error);
// };
// prom.then(onFulfilment);
// prom.catch(onRejection);

///// 3rd Example with pending condition ////////

// let name ="Shehroz";

// let prom=new Promise(function (resolve,reject) {
//     console.log("Fetching data");                  /////to show pending condition we put here setTimeout condition
//     setTimeout(()=>{
//         if (name=="Shehroz") {
//             resolve("Correct Name");
//         } else {
//             reject("Wrong Name");
//         }
//     }
//         ,1000)
// });
// let onFulfilment=(result)=> {
//     console.log(result);
// };
// let onRejection=(error)=> {
//     console.log(error);
// };
// prom.then(onFulfilment);
// prom.catch(onRejection);

/////////// 4th Example of division //////////////

let prom = (a, b) => {
  return new Promise(function (resolve, reject) {
    console.log("Fetching data"); /////to show pending condition we put here setTimeout condition
    c = a / b;
    setTimeout(() => {
      if (a,b) {
        resolve(`Your answer is: ${c}`);
      } else {
        reject("Failed to calculate");
      }
    }, 1000);
  });
};
let onFulfilment = (result) => {
  console.log(result);
};
let onRejection = (error) => {
  console.log(error);
};
prom(5, 0).then(onFulfilment).catch(onRejection);
// prom(12, 5).then(onFulfilment).catch(onRejection);