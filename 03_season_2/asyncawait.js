/**
* What is async ?
* What is await ?
* How async await works behind the scenes?
* Examples of using async/await
* Error Handling
* Interviews
* Async await vs Promise.then/.catch
*
*/
// Async : make a function return a promise implicitly
// Await : make a function wait for a promise

// Allows you to write asynchronous code in a synchronous manner
// async doesn't have resolve and reject like promise
// Everything after await is placed in an event queue.


// Async always returns a promise

async function getData() {
    return "hello world";       // this is same as return Promise.resolve("hello world");
}

console.log(getData());         // Promise { 'hello world' }
// console.log(getData()
// .then(data => console.log(data))
// );

