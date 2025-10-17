class Animal{
    constructor(name){
        this.name = name;
    }
    eat(){
        console.log(`${this.name} eats...`);     
    }
}

class Dog extends Animal{
    constructor(name, breed){
        super(name);    // Calls constructor of the parent class 
        this.breed = breed;
    }

    bark(){
        console.log(`${this.name} barks, "I am ${this.breed}"`);
        
    }
}

const dog = new Dog("Tommy", "Siberian Husky");
dog.eat();
dog.bark();