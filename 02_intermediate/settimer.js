function x(){
    setTimeout(() => {
        console.log("Thank you for waiting 3 second.");       // You will have to wait for more than 3 second because js is single threaded language. 
    }, 1000);

    const start = Date.now();
    while (Date.now() < start+5000) {
        
    }
    console.log("You don't have to wait for this one");
    
}
x();

