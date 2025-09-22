// What is a Callback Function in JavaScript
// setTimeout(() => {
//     console.log("timer");
// }, 5000);

// function x(y) {
//     console.log('x');
//     y();
// }

// x(function y(){
//     console.log('y');
// });

// console.log('hi');

// JavaScript is a synchronous and single-threaded language
// Blocking the main thread
// Power of Callbacks?
// Deep about Event listeners
// Closures Demo with Event Listeners
// Scope Demo with Event listeners
// Garbage Collection & removeEventListeners


// document.getElementById("clickMe").addEventListener("click", function xyz(){
//     console.log("Button clicked. ");
    
// })

// Wap to print how many times the button is clicked ]

// This is my way, let's see how mu tutor would do//
/*
function counter(count) {
    function inner() {
        count++;
        console.log(count);
    }
    return inner;
}

let counter1 = counter(0);
document.getElementById("clickMe").addEventListener("click",function callCounter(){
    counter1();
})
*/

// This is how my tutor would do very simple 

function attachEventListener(){
    let count= 0;
    document.getElementById("clickMe").addEventListener("click", function counter(){
        console.log(`Button clicked ${++count} times`);
    })
}

attachEventListener();

// Why do we have to remove event listeners 
// Because closures are memory heavy and can cause serious impact in speed due to number of event listeners.
