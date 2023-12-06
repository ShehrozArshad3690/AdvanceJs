function sum() {
    console.log(arguments);
    let total=0;
    for (let i in arguments) {
        total+=arguments[i];
    }
    console.log(total);
}


sum(90,80,4,2,5,9);
// sum("Shehroz",90,80,4,2,5,9);            //it just concatinate all the values into a single value like string



function sum2(name,...args) {
    console.log(arguments);
    let total2=0;
    for (const i in args) {
        total2+=args[i];
    }
    console.log(name,total2);
}

sum2("Shehrroz",3,4,5,6,9);


function sum3(name,course,...args) {
    console.log(arguments);
    let total3=0;
    for (const i in args) {
        total3+=args[i];
    }
    // console.log(name,course,total3);
    console.log(`Hello ${name} your marks in ${course} is ${total3}`);
}

sum3("Shehroz","JavaScript",93,490,29,20);