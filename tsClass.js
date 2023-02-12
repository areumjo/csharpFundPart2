var Car = /** @class */ (function () {
    // constructor
    function Car(make, color, doors) {
        if (doors === void 0) { doors = 4; }
        this._make = make;
        this._color = color;
        this._doors = doors;
    }
    Object.defineProperty(Car.prototype, "make", {
        // accessor : access to a property / validate data / impose constraints / perform other manipulation
        get: function () {
            return this._make;
        },
        set: function (make) {
            this._make = make;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "color", {
        get: function () {
            return "The color of the car is " + this._color;
        },
        set: function (color) {
            this._color = color;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "doors", {
        get: function () {
            return this._doors;
        },
        set: function (doors) {
            if ((doors % 2) === 0)
                this._doors = doors;
            else
                throw new Error('Door must be an even number.');
        },
        enumerable: false,
        configurable: true
    });
    // methods : `function` keyword not needed
    Car.prototype.accelerate = function (speed) {
        return "".concat(this.worker(), " is accelerating to ").concat(speed, " MPH.");
    };
    Car.prototype.brake = function () {
        return "".concat(this.worker(), " is braking with the standard braking system.");
    };
    Car.prototype.turn = function (direction) {
        return "".concat(this.worker(), " is turning ").concat(direction);
    };
    // This function performs work for the other method functions
    Car.prototype.worker = function () {
        return this._make;
    };
    return Car;
}());
var myCar1 = new Car('Cool Car Company', 'blue', 2); // Instantiates the Car object
console.log(myCar1._color); // blue // raw data // the property defined in the class
console.log(myCar1.color); // The color ... is blue // access the property through `get` or `set`
// myCar1.doors = 5; // Error when you use setter
var myCar2 = new Car('Galaxy Motors', 'gray');
console.log(myCar2.doors); // returns 4, the default value
console.log(myCar1.accelerate(35));
console.log(myCar1.brake());
console.log(myCar1.turn('right'));
