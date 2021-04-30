class Vehicle {
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }
    honk(){
        return "Beep."
    }
    toString(){
        return `This vehicle is a ${this.make} ${this.model} from ${this.year}`;
    }
}

class Car extends Vehicle {
    constructor (make, model, year){
        super(make, model, year);
        this.numwheels = 4;
    }
}

class Motorcycle extends Vehicle {
    constructor(make, model, year){
        super(make, model, year);
        this.numwheels = 2;
    }
    revEngine(){
        return 'Vroom!';
    }
}

class Garage {
    constructor(capacity){
        this.vehicles=[];
        this.capacity = capacity;
    }
    add(newVehicle){
        if(!(newVehicle instanceof Vehicle)) {
            return 'Only vehicles allowed in here!';
        }
        if (this.vehicles.length >= this.capacity){
            return 'Sorry, we are full.';
        }
        this.vehicles.push(newVehicle);
        return 'Vehicle added.';
    }
}