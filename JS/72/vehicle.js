(function () {
    'use strict';
    class Vehicle {
        constructor(color) {
            this.color = color;
        }

        print() {
            console.log(this.speed ? `This vehicle is ${this.color} and going ${this.speed} miles an hour` : `This vehicle is ${this.color}`);
        }

        go(speed) {
            this.speed = speed;
            console.log(`Vehicle is now going ${this.speed} miles an hour`);
        }

    }

    const blueCar = new Vehicle('blue');
    blueCar.print();
    blueCar.go(65);
    blueCar.print();

    class Plane extends Vehicle {
        constructor(color) {
            super(color);
        }

        go(speed) {
            this.speed = speed;
            console.log(`Plane is now flying ${this.speed} miles an hour`);
        }
    }

    const yellowPlane = new Plane('yellow');
    yellowPlane.print();
    yellowPlane.go(780);
    yellowPlane.print();

}());