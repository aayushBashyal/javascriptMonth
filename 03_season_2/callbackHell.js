// Callback hell is the condition of nested callbacks which makes the code hard to read and maintain.

const cart = ['Daura', "Surwal", "Topi"];

api.createOrder(cart , function(){
    api.proceedToPayment(
        api.showOrderSummary();
    );
});

// Inversion of control
// We are giving control of our code to some other function or library. 
// We don't know when our callback will be called and how many times it will be called. 
// This can lead to unexpected behavior and bugs in our code.


