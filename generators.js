//simple function

function generateList() {
    console.log("First Message");
    console.log("Second Message");
    console.log("Third Message");
    console.log("Fourth Message");
}

generateList();


// generator 

function *msgList() {
    yield "Hello";
    yield "World";
    yield "This is from generator";
}
let show=msgList();
console.log(show);
console.log(show.next());
console.log(show.next().value);
console.log(show.next().done);                    //returns false because of atleast one statement remaining for execution
console.log(show.next().done);                  //returns true because of no statement remaining for execution



// using loop


// function *iter() {
//     yield "First";
//     yield "Second";
//     yield "Third";
// }
// let g=iter();
// for (const i of g) {
//     console.log(i);
// }


// another example with while loop
// function *iter() {
//     let a=1;
//     while (true) {
//         yield(a++);
//     }
// }
// let g=iter();
// console.log(g.next());
// console.log(g.next());
// console.log(g.next().value);
// console.log(g.next().done);
// console.log(g.next());



/// 4th example
function *iter() {
    let a=291;
    while (true) {
        yield(a++);
    }
}
let g=iter();
for (const i of g) {
    if (i>310) {
        break;
    } else {
        console.log(i);
    }
}



///we can also set the value of yield in this way

// function *genr() {
//     let result=yield;
//     console.log(`Results : ${result}`);
// }
// let f=genr();
// f.next();                       /// this line initialized the f object
// f.next(23);                        // here next function sets the value of yield as 23



/// set more than one yield's value by array

function *genr() {
    let yArray=[yield,yield,yield,yield];
    console.log(`Results : ${yArray}`);
    // console.log(`Results : ${yArray[1]}`);
}
let f=genr();
f.next();                       /// this line initialized the f object
f.next(23);  
f.next("Shehroz");  
f.next(22);  
f.next(21);  

//// we can use single and array file both

// function *sList() {
//     yield 369;
//     yield ["Shehroz","Saman","Turkey"]
// }
// let resultList=sList();
// console.log(resultList.next());
// console.log(resultList.next());
// console.log(resultList.next());


// if we can to show the array values as single value

function *sList() {
    yield 369;
    yield* ["Shehroz","Saman","Turkey"]
}
let resultList=sList();
console.log(resultList.next());
console.log(resultList.next());
console.log(resultList.next());
console.log(resultList.next());

//using spread operator

function *list1() {
    yield 34;
    yield "Aslam";
    yield "Book";
    yield 90;
}

let li=list1();
console.log(li.next().value);
console.log(...li);             //here during object calling spread operator is used