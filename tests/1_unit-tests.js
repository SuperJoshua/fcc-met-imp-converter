"use strict"

// A file I modified.

const chai = require("chai")
let assert = chai.assert
const ConvertHandler = require("../controllers/convertHandler.js")

let ch = new ConvertHandler()

suite("Unit Tests", function(){
   test("should correctly read a whole number input", function() {assert.strictEqual(ch.getNum("123mi"), 123)})
   
   test("should correctly read a decimal number input", function() {assert.strictEqual(ch.getNum("1.23mi"), 1.23)})
   
   test("should correctly read a fractional input", function() {assert.approximately(ch.getNum("1/23mi"), 1/23, 0.01)})
   
   test("should correctly read a fractional input with a decimal", function() {assert.approximately(ch.getNum("1/2.3mi"), 1/2.3, 0.01)})
   
   test("should correctly return an error on a double-fraction (i.e. 3/2/3)", function() {assert.throws(() => ch.getNum("1/2/3mi"))})
   
   test("should correctly default to a numerical input of 1 when no numerical input is provided", function() {assert.strictEqual(ch.getNum("mi"), 1)})
   
   test("should correctly read each valid input unit", function() {assert.strictEqual(ch.getUnit("mi"), "mi")})
   
   test("should correctly return an error for an invalid input unit", function() {assert.throws(() => ch.getUnit("mig"), Error, "invalid unit")})
   
   test("should return the correct return unit for each valid input unit", function() {assert.strictEqual(ch.getReturnUnit("mi"), "km")})
   
   test("should correctly return the spelled-out string unit for each valid input unit", function() {assert.strictEqual(ch.spellOutUnit("mi"), "miles")})
   
   test("should correctly convert gal to L.", function() {assert.approximately(ch.convert(1, "gal"), 3.78541, 0.01)})
   
   test("should correctly convert L to gal", function() {assert.approximately(ch.convert(3.78541, "L"), 1, 0.01)})
   
   test("should correctly convert mi to km", function() {assert.approximately(ch.convert(1, "mi"), 1.60934, 0.01)})
   
   test("should correctly convert km to mi", function() {assert.approximately(ch.convert(1.60934, "km"), 1, 0.01)})
   
   test("should correctly convert lbs to kg", function() {assert.approximately(ch.convert(1, "lbs"), 0.453592, 0.01)})
   
   test("should correctly convert kg to lbs", function() {assert.approximately(ch.convert(0.453592, "kg"),1,  0.01)})

   // I noticed that there were no tests required to test ch.getString.
})