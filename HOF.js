// Higher Order Function

function intro() {
    console.log("This is me");
}
setTimeout(intro,2000);                   // setTimeout() function is higher order function bcz it is accepting a function as a parameter


//// Here display() function is call back function bcz it is using as a parameter in setTimout funtion



let display=()=> console.log(10);

function show() {
    return display;
}

let a=show();                          //show() function is higher order function bcz it is returning us a function
a();