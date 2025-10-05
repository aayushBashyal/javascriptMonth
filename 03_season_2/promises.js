const cart = ["shoes", "pants", "kurta"];

createOrder(cart)
.then(function (orderId) {
    console.log(orderId);
    return proceedToPayment(orderId);
})
.then(function (paymentInfo) {
    return showOrderSummary(paymentInfo);
})
.catch(function (err) {
    console.log(err.message);
})

// 
function createOrder(cart) {
    const pr = new Promise(function (resolve, reject) {
        if (!validateCart(cart)) {
            const err = new Error("Cart is not valid");
            reject(err);
        }
        console.log("Creating order...");

        // Process the cart
        // Create the order
        // Return the order id

        // Logic to create order
        const orderId = "12345";
        if (orderId) {
            setTimeout(() => {  // mimicking a network call
                resolve(orderId);
            }, 5000);
        }
    });
    // console.log(pr);
    return pr;
}


function validateCart(cart) {
    return false;
}

function proceedToPayment(orderId) {
    console.log("Proceeding to payment for order:", orderId);
    return new Promise(function (resolve, reject) {
        // Simulate payment processing
        setTimeout(function () {
            const isSuccess = true; // Simulate success/failure
            if (isSuccess) {
                resolve("Payment successful");
            } else {
                reject(new Error("Payment failed"));
            }
        }, 2000);
    });
}

function showOrderSummary(paymentInfo) {
    return new Promise(function (resolve, reject) {
        console.log("Showing order summary...");
        // Simulate fetching order summary
        setTimeout(function () {
            const isSuccess = true; // Simulate success/failure
            if (isSuccess) {
                resolve("Order summary details");
            } else {
                reject(new Error("Failed to fetch order summary"));
            }
        }, 1000);
    });
}

