//Exercise 6: Basic Prototype Chain
const vehicle = {
    wheels: 4,
    describe(){
        return `This vehicle has ${this.wheels} wheels`;
    }
};

const car = Object.create(vehicle);
car.make = 'Toyota';
car.model = 'Camry';
car.year = '2024';

console.log(Object.hasOwn(car, 'make'));   
console.log(Object.hasOwn(car, 'wheels')); 
console.log(car.wheels);                   
console.log(car.describe());


//This code creates a car object that inherits properties and methods from vehicle.
//It checks which properties belong directly to car and uses an inherited method from vehicle.