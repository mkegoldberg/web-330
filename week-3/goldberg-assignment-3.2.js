/*
============================================
; Title: Assignment 3.2
; Author: Mike Goldberg
; Date: 03/03/20
; Modified By: Mike Goldberg
; Description: The Factory Pattern
;===========================================
*/
// Require statement that imports the header.js file from my root directory.
const header = require('../goldberg-header.js');

// start program

/*
  expected output:
  Oracle {
    username: 'admin',
    password: 'Sshhh123',
    server: 'localhost:8080',
    version: '3.2.1'
  }

  Informix {
    username: 'user123',
    password: 'js2020',
    server: 'localhost:3000'
  }

*/
// Object Instantiation
function Oracle(properties) {
  this.username = properties.username || "user";
  this.password = properties.password || "1234";
  this.server = properties.server || "localhost:8080";
  this.version = properties.version || "3.2.1"
}

function Informix(properties) {
  this.username = properties.username || "admin";
  this.password = properties.password || "4321";
  this.server = properties.server || "localhost:3000";
}

function DatabaseFactory() { }

// Use Prototype
DatabaseFactory.prototype.databaseClass = Informix;
DatabaseFactory.prototype.createDatabase = function (properties) {
  if (properties.databaseType === "Oracle") {
    this.databaseClass = Oracle;
  }
  if (properties.databaseType === "Informix") {
    this.databaseClass = Informix;
  }
  return new this.databaseClass(properties);
};

// Declare Variables
var oracleFactory = new DatabaseFactory();
var oracle = oracleFactory.createDatabase({
  databaseType: "Oracle",
  username: "admin",
  password: "Sshhh123"
});

var informixFactory = new DatabaseFactory();
var informix = informixFactory.createDatabase({
  databaseType: "Informix",
  username: "user123",
  password: "js2020"
});

// output
console.log(header.display("Mike", "Goldberg", "assignment 3.2"), "\n");

console.log(oracle);
console.log(informix);

//  end program
