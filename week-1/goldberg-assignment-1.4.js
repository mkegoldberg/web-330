/*
============================================
; Title:  Exercise 1.4
; Author: Mike Goldberg
; Date:   18 February 2020
; Description: Duck Typing, A.K.A. "Interfaces"
;===========================================
*/

// Require statement that imports the header.js file from my root directory.
const header = require('../goldberg-header.js');

/*
 Expected output:

 Car added to the racetrack!
 Truck added to the racetrack!
 Jeep added to the racetrack!

 -- The following vehicles have been added to the racetrack --
 Truck: <Model>
 Car: <Model>
 Jeep: <Model>


*/

// start program

/**
 * Description: Car class
 * @param model
 * @constructor
 */
function Car(model) {
  this.model = model;
}
Car.prototype.start = function () {
    console.log("Car added to the racetrack!");
}

/**
 * Description: Truck class
 * @param model
 * @param year
 * @constructor
 */
function Truck(model, year) {
  this.model = model;
  this.year = year;
}
Truck.prototype.start = function () {
    console.log("Truck added to the racetrack!");
}

/**
 * Description: Jeep class
 * @param model
 * @param year
 * @param color
 * @constructor
 */
function Jeep(model, year, color) {
  this.model = model;
  this.year = year;
  this.color = color;
}
Jeep.prototype.start = function () {
    console.log("Jeep added to the racetrack!");
}

// Array of vehicles
let vehicles = [
  new Car('Corvette'),
  new Truck('Tacoma', '1997'),
  new Jeep('Grand Cherokee', '2020')
];

let racetrack = [];

function driveIt(vehicle) {
    vehicle.start();

    racetrack.push(vehicle);
}


// Announce the vehicles are ready
function announce(vehicleList) {
    vehicleList.forEach(vehicle => {
        driveIt(vehicle);
    })
}

// output
console.log(header.display("Mike", "Goldberg", "assignment 1.4"), "\n");

announce(vehicles);
console.log("\n-- The following vehicles have been added to the racetrack --");

// Loop over the vehicles array and output the results
for (var i = 0; i < racetrack.length; i++) {
    console.log(racetrack[i].constructor.name + ": " + racetrack[i].model);
}

// end program

