// Closures remember the scope of outer function even after its creation

function person() {
    fname="Shehroz";
    function intro() {                          // closures remember the fname variable from the scope of outer function to use it in inner funtion
        console.log(`Hi this is ${fname}`);
    }
    function showClass() {
        console.log(`Class of ${fname} is IT`);
    }
    intro();
    showClass();
}

person();


//// Another Example



// function clickHandler(size) {
//     return function () {
//         document.body.style.fontSize=`${size}px`;
//     }
// }
// document.getElementById("size-12").onclick=clickHandler(12);
// document.getElementById("size-14").onclick=clickHandler(14);
// document.getElementById("size-16").onclick=clickHandler(16);