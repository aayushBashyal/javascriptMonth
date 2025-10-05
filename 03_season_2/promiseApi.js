// All, AllSettled, Race, Any

// Promise.all
/*
    Promise.all takes an array of promises and returns a single promise that resolves when all of the promises in the array have resolved, or rejects if any of the promises in the array reject.

*/


// Promise.allSettled:
/*
    yesle fail bhayepani, pass bhayeko ko result pauxa.
*/


/*
    # Promise.race 
    yesle fastest promise ko result return garcha.
    fastest vaneko, sab bhanda chito resolve/reject bhayeko promise ho. 
*/

/*
# Promise.any
    yesle fastest resolve bhayeko promise ko result return garcha.
    fastest vaneko, sab bhanda chito resolve bhayeko promise ho.
    yedi sabai promise reject bhaye, tab yele AggregateError return garcha, jasle sabai rejection reason haru sametcha.
    - AggregateError bhaneko sabai rejection haruko array ho.
*/


// Example usage:
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('Rej from p1');
    }, 3000);
});

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('acc from p2');
    }, 2000);
});

const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('Error from p3');
    }, 4000);

});

// Promise.all
Promise.all([p1, p2, p3])
    .then(results => {
        console.log('All promises resolved:', results);
    })
    .catch((error) => {
        console.error('One of the promises rejected:', error);
    });

// Promise.allSettled
Promise.allSettled([p1, p2, p3])
    .then(results =>{
        console.log("Some promises are resolved, some might still be rejected.", results);
    })
    .catch(error => {
        console.log(`allsettled error is ${error}` );
    })

// Promise.race
Promise.race([p1, p2, p3])
    .then(result =>{
        console.log(`Promise to settled first is ${result}`);
    })
    .catch((error ) => {        // first settled promise reject bhayo bhane catch run huncha.
        console.log(`race error is ${error}` );
    })


// Promise.any
Promise.any([p1, p2, p3])
    .then(result =>{
        console.log(`First resolved promise is ${result}`);
    })
    .catch((error) => {        // yedi sabai reject bhaye matra catch run huncha.
        console.log(`any error is ${error}` );
        console.log(`All rejection reasons are: ${error.errors}`);
    })

