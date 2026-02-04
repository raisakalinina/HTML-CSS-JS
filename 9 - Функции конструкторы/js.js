"use strict";

const Car = function (mark, speed) {
  this.mark = mark;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.mark} едедет со скоростью ${this.speed} км\ч`);
};
Car.prototype.break = function () {
  this.speed -= 5;
  console.log(`${this.mark} едедет со скоростью ${this.speed} км\ч`);
};

const lada = new Car("Lada", 170);
lada.accelerate();
lada.break();

const skoda = new Car("Skoda", 105);
skoda.accelerate();
skoda.break();
