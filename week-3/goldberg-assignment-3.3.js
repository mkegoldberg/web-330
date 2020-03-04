/*
============================================
; Title: Assignment 3.3
; Author: Mike Goldberg
; Date: 03/03/20
; Modified By: Mike Goldberg
; Description: The Singleton Pattern
;===========================================
*/
// Require statement that imports the header.js file from my root directory.
const header = require('../goldberg-header.js');

// start program

/*
  expected output:

  Same database instance? true

*/
// Object Instantiation
var DatabaseSingleton = (function () {
  var instance;
  function createInstance() {
    var postgresDatabase = new Object("Database instance initialized!");
    return postgresDatabase;
  }
  return {
    getInstance: function () {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    }
  }
})();
function DatabaseSingletonTest() {
  var oracle = DatabaseSingleton.getInstance();
  var postgres = DatabaseSingleton.getInstance();
  console.log("One database instance? " + (oracle === postgres));
};

// output
console.log(header.display("Mike", "Goldberg", "assignment 3.3"), "\n");

DatabaseSingletonTest()

//  end program
