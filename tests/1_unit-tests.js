"use strict"

// A file I modified.

const chai = require("chai")
let assert = chai.assert
const ConvertHandler = require("../controllers/convertHandler.js")

let ch = new ConvertHandler()

suite("Unit Tests", function(){
   assert.strictEqual(ch.getNum("123mi"), 123, "should correctly read a whole number input")
   assert.strictEqual(ch.getNum("1.23mi"), 1.23, "should correctly read a decimal number input")
   assert.approximately(ch.getNum("1/23mi"), 1/23, 0.01, "should correctly read a fractional input")
   assert.approximately(ch.getNum("1/2.3mi"), 1/2.3, 0.01, "should correctly read a fractional input with a decimal")
   assert.throws(() => ch.getNum("1/2/3mi"), "invalid number", "should correctly return an error on a double-fraction (i.e. 3/2/3)")
   assert.strictEqual(ch.getNum("mi"), 1, "should correctly default to a numerical input of 1 when no numerical input is provided")
   assert.strictEqual(ch.getUnit("mi"), "mi", "should correctly read each valid input unit")
   assert.strictEqual(ch.getUnit("km"), "km", "should correctly read each valid input unit")
   assert.strictEqual(ch.getUnit("gal"), "gal", "should correctly read each valid input unit")
   assert.strictEqual(ch.getUnit("L"), "L", "should correctly read each valid input unit")
   assert.strictEqual(ch.getUnit("lbs"), "lbs", "should correctly read each valid input unit")
   assert.strictEqual(ch.getUnit("kg"), "kg", "should correctly read each valid input unit")
   assert.throws(() => ch.getUnit("mig"), Error, "invalid unit", "should correctly return an error for an invalid input unit")
   assert.strictEqual(ch.getReturnUnit("mi"), "km", "should return the correct return unit for each valid input unit")
   assert.strictEqual(ch.getReturnUnit("km"), "mi", "should return the correct return unit for each valid input unit")
   assert.strictEqual(ch.getReturnUnit("gal"), "L", "should return the correct return unit for each valid input unit")
   assert.strictEqual(ch.getReturnUnit("L"), "gal", "should return the correct return unit for each valid input unit")
   assert.strictEqual(ch.getReturnUnit("lbs"), "kg", "should return the correct return unit for each valid input unit")
   assert.strictEqual(ch.getReturnUnit("kg"), "lbs", "should return the correct return unit for each valid input unit")
   assert.strictEqual(ch.spellOutUnit("mi"), "miles", "should correctly return the spelled-out string unit for each valid input unit")
   assert.strictEqual(ch.spellOutUnit("km"), "kilometers", "should correctly return the spelled-out string unit for each valid input unit")
   assert.strictEqual(ch.spellOutUnit("gal"), "gallons", "should correctly return the spelled-out string unit for each valid input unit")
   assert.strictEqual(ch.spellOutUnit("L"), "liters", "should correctly return the spelled-out string unit for each valid input unit")
   assert.strictEqual(ch.spellOutUnit("lbs"), "pounds", "should correctly return the spelled-out string unit for each valid input unit")
   assert.strictEqual(ch.spellOutUnit("kg"), "kilograms", "should correctly return the spelled-out string unit for each valid input unit")
   assert.approximately(ch.convert(1, "gal"), 3.78541, 0.01, "should correctly convert gal to L.")
   assert.approximately(ch.convert(3.78541, "L"), 1, 0.01, "should correctly convert L to gal")
   assert.approximately(ch.convert(1, "mi"), 1.60934, 0.01, "should correctly convert mi to km")
   assert.approximately(ch.convert(1.60934, "km"), 1, 0.01, "should correctly convert km to mi")
   assert.approximately(ch.convert(1, "lbs"), 0.453592, 0.01, "should correctly convert lbs to kg")
   assert.approximately(ch.convert(0.453592, "kg"),1,  0.01, "should correctly convert kg to lbs")

   // I noticed that there were no tests required to test ch.getString.
})