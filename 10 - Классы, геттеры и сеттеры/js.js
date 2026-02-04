"use strict";


class Car {
  constructor(mark, speed) {
    this.mark = mark;
    this.speed = speed;
    this.speedUS;
  }
  get speed() {
    return this.speedUS * 1.6;
  }
  set speed(speed) {
    this.speedUS = speed / 1.6;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.mark} едедет со скоростью ${this.speed} км\ч`);
  }

  break() {
    this.speed -= 5;
    console.log(`${this.mark} едедет со скоростью ${this.speed} км\ч`);
  }
}

const skoda = new Car("Skoda", 70);
console.log(skoda);
