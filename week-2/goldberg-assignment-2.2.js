/*
============================================
; Title:  Exercise 2.2
; Author: Mike Goldberg
; Date:   24 February 2020
; Description: Prototypes
;===========================================
*/

// Require statement that imports the header.js file from my root directory.
const header = require('../goldberg-header.js');

/*
 Expected output:

 The person's full name is Mike Goldberg
 The person's age is 42

*/

// start program

// variable declaration
var person = {
    getAge: function () {
        return this.age;
    }
};
// intantiate object
var mike = Object.create(person, {
    "age": { "value": "42" },
    "fullName": {"value": "Mike Goldberg"},
});

// output
console.log(header.display("Mike", "Goldberg", "assignment 1.4"), "\n");

console.log("The person's full name is " + mike.fullName);
console.log("The person's age is " + mike.getAge());

// end program

