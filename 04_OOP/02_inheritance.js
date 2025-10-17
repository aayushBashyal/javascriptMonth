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


class ElectricCar extends Car {
    
}