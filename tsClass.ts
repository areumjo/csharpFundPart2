class Car {
  // properties : `_` (underscore) : a way to distinguish the property from the params in constructor
  _make: string;
  _color: string;
  _doors: number;

  // constructor
  constructor(make: string, color: string, doors = 4) {
    this._make = make;
    this._color = color;
    this._doors = doors;
  }
  // accessor : access to a property / validate data / impose constraints / perform other manipulation
  get make() {
    return this._make;
  }

  set make(make) {
    this._make = make;
  }

  get color() {
    return "The color of the car is " + this._color;
  }

  set color(color) {
    this._color = color;
  }

  get doors() {
    return this._doors;
  }

  set doors(doors) {
    if ((doors % 2) === 0) this._doors = doors;
    else throw new Error('Door must be an even number.');
  }

  // methods : `function` keyword not needed
  accelerate(speed: number): string {
    return `${this.worker()} is accelerating to ${speed} MPH.`
  }
  brake(): string {
    return `${this.worker()} is braking with the standard braking system.`
  }
  turn(direction: 'left' | 'right'): string {
    return `${this.worker()} is turning ${direction}`;
  }
  // This function performs work for the other method functions
  worker(): string {
    return this._make;
  }
}

let myCar1 = new Car('Cool Car Company', 'blue', 2);  // Instantiates the Car object

console.log(myCar1._color); // blue // raw data // the property defined in the class
console.log(myCar1.color); // The color ... is blue // access the property through `get` or `set`

// myCar1.doors = 5; // Error when you use setter

let myCar2 = new Car('Galaxy Motors', 'gray');
console.log(myCar2.doors);  // ß4, the default value

console.log(myCar1.accelerate(35));
console.log(myCar1.brake());
console.log(myCar1.turn('right'));
