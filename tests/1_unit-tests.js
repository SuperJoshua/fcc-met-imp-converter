"use strict"

const chai = require("chai")
let assert = chai.assert
const ConvertHandler = require("../controllers/convertHandler.js")

let ch = new ConvertHandler()

suite("Unit Tests", function(){
   // convertHandler should correctly read a whole number input
   assert.strictEqual(ch.getNum("123mi"), 123)

   // convertHandler should correctly read a decimal number input
   assert.strictEqual(ch.getNum("1.23mi"), 1.23)

   // convertHandler should correctly read a fractional input
   assert.approximately(ch.getNum("1/23mi"), 1/23, 0.01)

   // convertHandler should correctly read a fractional input with a decimal
   assert.approximately(ch.getNum("1/2.3mi"), 1/2.3, 0.01)

   // convertHandler should correctly return an error on a double-fraction (i.e. 3/2/3)
   assert.throws(() => ch.getNum("1/2/3mi"), "invalid number")

   // convertHandler should correctly default to a numerical input of 1 when no numerical input is provided
   assert.strictEqual(ch.getNum("mi"), 1)

   // convertHandler should correctly read each valid input unit
   assert.strictEqual(ch.getUnit("mi"), "mi")
   assert.strictEqual(ch.getUnit("km"), "km")
   assert.strictEqual(ch.getUnit("gal"), "gal")
   assert.strictEqual(ch.getUnit("L"), "L")
   assert.strictEqual(ch.getUnit("lbs"), "lbs")
   assert.strictEqual(ch.getUnit("kg"), "kg")

   // convertHandler should correctly return an error for an invalid input unit
   assert.throws(() => ch.getUnit("mig"), Error, "invalid unit")

   // convertHandler should return the correct return unit for each valid input unit
   assert.strictEqual(ch.getReturnUnit("mi"), "km")
   assert.strictEqual(ch.getReturnUnit("km"), "mi")
   assert.strictEqual(ch.getReturnUnit("gal"), "L")
   assert.strictEqual(ch.getReturnUnit("L"), "gal")
   assert.strictEqual(ch.getReturnUnit("lbs"), "kg")
   assert.strictEqual(ch.getReturnUnit("kg"), "lbs")

   // convertHandler should correctly return the spelled-out string unit for each valid input unit
   assert.strictEqual(ch.spellOutUnit("mi"), "miles")
   assert.strictEqual(ch.spellOutUnit("km"), "kilometers")
   assert.strictEqual(ch.spellOutUnit("gal"), "gallons")
   assert.strictEqual(ch.spellOutUnit("L"), "liters")
   assert.strictEqual(ch.spellOutUnit("lbs"), "pounds")
   assert.strictEqual(ch.spellOutUnit("kg"), "kilograms")

   // convertHandler should correctly convert gal to L.
   assert.approximately(ch.convert(1, "gal"), 3.78541, 0.01)

   // convertHandler should correctly convert L to gal
   assert.approximately(ch.convert(3.78541, "L"), 1, 0.01)

   // convertHandler should correctly convert mi to km
   assert.approximately(ch.convert(1, "mi"), 1.60934, 0.01)

   // convertHandler should correctly convert km to mi
   assert.approximately(ch.convert(1.60934, "km"), 1, 0.01)

   // convertHandler should correctly convert lbs to kg
   assert.approximately(ch.convert(1, "lbs"), 0.453592, 0.01)

   // convertHandler should correctly convert kg to lbs
   assert.approximately(ch.convert(0.453592, "kg"),1,  0.01)

   // I noticed that there were no tests testing ch.getString.
})