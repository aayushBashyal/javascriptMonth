// Method -1
/*
const car = {
  brand: "Audi",
  model: "r8",
  start() {
    console.log("Vroommmmmmm");
  },
};

car.start();
*/




// Method-2 Using Constructor 
/*
function Car(brand, model){
    this.brand = brand;
    this.model = model;
}

Car.prototype.start = function () {
    console.log("Bhrooommmmmmmm");
       
}

const newCar = new Car("Mercedes", "AMG");
newCar.start();
console.log(newCar.brand);
*/




// Method-3 : using class, Modern appoach, Clean

class Car {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }

    start () {
        console.log("vrooooooooooooooommmmmmmmmmmmm");
    }
}

const newCar = new Car("Toyota", "Land Cruiser ZX");
console.log(newCar.brand + " " + newCar.model);
newCar.start();
