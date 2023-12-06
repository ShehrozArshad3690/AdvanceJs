export let message="Hello this uis ES6 Modules";


export function user(name) {
    console.log(`Hello ${name}`)
}


export class test{
    constructor(){
        console.log("Constructor Method");
    }
}


// we can also export all in this way too rather than typing export independtly in the starting
// export {message,user,test};



// if we want to make default function 
export default function () {
    console.log("Hello Default Function");
}

export function show(){
    console.log("This is Aggregate Module Call");
}