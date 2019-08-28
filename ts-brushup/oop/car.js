"use strict";
exports.__esModule = true;
var Car = /** @class */ (function () {
    // speed: number
    // col: string
    // constructor(spd: number, col: string) {
    //     this.speed = spd
    //     this.col = col
    // }
    function Car(speed, col) {
        this.speed = speed;
        this.col = col;
    }
    Car.prototype.speedUp = function () {
        console.log(this.speed);
    };
    return Car;
}());
exports.Car = Car;
var car = new Car(59, 'blue');
car.speedUp();
