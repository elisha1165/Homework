(function () {
    'use strict';

    function Vehicle(color/*, speed = 0*/) {
        this.color = color;
        // this.speed = speed;
    }

    Vehicle.prototype.go = function (speed) {
        this.speed = speed;
        console.log(`Vehicle is now going ${this.speed} miles an hour`);
    };

    Vehicle.prototype.print = function () {
        console.log(this.speed ? `This vehicle is ${this.color} and going ${this.speed} miles an hour` : `This vehicle is ${this.color}`);
    };

    const greenCar = new Vehicle('green');

    greenCar.print();
    greenCar.go(50);  
    greenCar.print();

    function Plane(color) {
        Vehicle.call(this, color);
    }
    Plane.prototype = Object.create(Vehicle.prototype);

    // Plane.prototype.print = function () {
    //     console.log(`This plane is ${this.color} and f;ying ${this.speed} miles an hour`);
    // };
    Plane.prototype.go = function (speed) {
        this.speed = speed;
        console.log(`Plane is now flying ${this.speed} miles an hour`);
    };
    const bluePlane = new Plane('blue');
    bluePlane.go(735);
    bluePlane.print();
}());