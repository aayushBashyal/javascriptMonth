/*

Method Overriding: A child class defines a method with the exact same name as a method in its parent, giving it new, specific logic.

Duck Typing: JS is dynamically typed, so any object that has the necessary method (or "walks like a duck and quacks like a duck") can be treated polymorphically.
*/

// Method Overriding 




/*
class Shape{
    draw(){
        throw new Error("This method must be overridden by a subclass!");
    }
}

class Circle extends Shape{
    draw(){
        console.log("Drawing a circle with radius R ");
        
    }
}

class Rectangle extends Shape{
    draw(){
        console.log("Drawing a rectangle with length l and breadth b.");
        
    }
}

const shape = new Shape;
// shape.draw()     // Throws error. 
const circle = new Circle();
circle.draw();
*/





// Duck typing 
// If it walks and quacks like duck it must be duck.
//"Duck typing is a programming style, commonly seen in dynamically typed languages like JavaScript, where the identity of an object is less important than whether it provides the specific methods and properties (behavior) expected by a function."

// duck typing solves is tight coupling and rigid dependency in systems

// If two or more objects have methods with same name, in strongly typed language to use the same named method a function must explicitly given the class type(data structure), but not in js like dynamically typed language, it is called duck typing.

//ducktype_solution.js

const jetPlane = {
    model: "F-22 Raptor",
    move() {
        console.log("✈️ JET: Firing afterburners! (Moving by flying)");
    }
};

const train = {
    wagonCount: 42,
    move() { // It has the required 'move' method!
        console.log("🚂 TRAIN: Honking the horn! (Moving by rail)");
    }
};

const staticRock = {
    weight: "500kg",
    // No move() method here
};


function startMoving(entity) {
    // The duck test;
    if (typeof entity.move == 'function'){
        console.log("Entity accepted, initiating movememnt");
    }else{
        console.error("Cannot move, the obect has no move method")
    }
}

startMoving(staticRock);    // Error logged
startMoving(jetPlane);
startMoving(train);