/*
============================================
; Title:  object-literal-class.js
; Author: Mike Godlberg
; Date:   18 February 2020
; Description: Refresher on object literal classes
;===========================================
*/

// Require statement that imports the header.js file from my root directory.
const header = require('../goldberg-header.js');

/*
 Expected output:

-- DISPLAYING CELL PHONE DETAILS --
 Manufacturer: blackberry
 Model: z20
 Color: purple
 Price: $159

*/

// start program

// variable declaration
function CellPhone(manufacturer, model, color, price) {
    this.manufacturer = manufacturer;
    this.model = model;
    this.color = color;
    this.price = price;

    this.getPrice = function () {
        return this.price;
    };
    this.getModel = function () {
        return this.model;
    };
    this.getDetails = function() {
        return "Manufacturer: " + this.manufacturer + "\n" + "Model: " + this.getModel() + "\n" + "Color: " + this.color + "\n" + "Price: $" + this.getPrice();
    };

}

var phone1 = new CellPhone("blackberry", "z20", "purple", "159");

// output
console.log(header.display("Mike", "Goldberg", "assignment 1.3"), "\n");

console.log("-- DISPLAYING CELL PHONE DETAILS --")
console.log(phone1.getDetails());

// end program
