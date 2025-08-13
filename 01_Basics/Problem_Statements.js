/* 
problem statement: i am using an array as a stack in js. suppose i am using pop(). to pop an element in stack, if there is any undefined in the array, there is ambiguity, it can be an undefined object stored in the stack or the empty array (stack). 
*/


/*
// By creating Emptymarker symbol

const EMPTY_MARKER = Symbol("EMPTY");

function popStack(stack) {
    if (stack.length === 0) return EMPTY_MARKER;
    return stack.pop();
}

const stack = [undefined];
console.log(popStack(stack)); // undefined
console.log(popStack(stack) === EMPTY_MARKER); // true

*/


// By manually implementing stack 
class Stack {
    constructor() {
        this.items = [];
        this.size = 0;  
    }

    push(item){
        this.items[this.size++] = item;
    }

    pop() {
        if (this.size === 0) return { isEmpty: true, value: null};
        const item = this.items[--this.size];    // Decrement size before accessing the item
        // this.items[this.size ] = undefined;  //Keeps the size of array constant, just fill undefined value with the popped item. This is not what we wanted.

        this.items.length = this.size; // Adjusts the length of the array to match the size
        return { isEmpty: false, value: item };       
    }

}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(undefined);
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
