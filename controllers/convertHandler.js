"use strict"

// A file I modified.
// There"s so much to complain about. But I deleted all of it. Only this recognition of former self-indulgence remains.

function ConvertHandler() {
   this.convert = function(initNum, initUnit) {
      const galToL = 3.78541
      const lbsToKg = 0.453592
      const miToKm = 1.60934

      switch (initUnit) {
         case "gal": {return Number((initNum * galToL).toFixed(5))}
         case "L": {return Number((initNum / galToL).toFixed(5))}
         case "lbs": {return Number((initNum * lbsToKg).toFixed(5))}
         case "kg": {return Number((initNum / lbsToKg).toFixed(5))}
         case "mi": {return Number((initNum * miToKm).toFixed(5))}
         case "km": {return Number((initNum / miToKm).toFixed(5))}
         default: {
            // should be unreachable
            throw new Error("invalid argument for ConvertHandler.convert")
         }
      }
   }

   this.getNum = function(input) {
      const [num, units, extra] = input.split(/([a-z]+)/i)
      if (!units) {throw new Error("invalid unit")}
      if (extra) {throw new Error("invalid number and unit")}

      if (!num) {return 1}
      const [a, b, c] = num.split(/\//)
      if (c) {throw new Error("invalid number")}
      const x = Number(a)
      if (b) {
         const y = Number(b)
         if (x > 0 && y > 0) {return x / y}
         else {throw new Error("invalid number")}
      }
      if (x > 0) {return x}
      else {throw new Error("invalid number")}
   }

   this.getReturnUnit = function(initUnit) {
      switch (initUnit) {
         case "gal": {return "L"}
         case "L": {return "gal"}
         case "lbs": {return "kg"}
         case "kg": {return "lbs"}
         case "mi": {return "km"}
         case "km": {return "mi"}
         default: {
            // should be unreachable
            throw new Error("invalid argument for ConvertHandler.getReturnUnit")
         }
      }
   }

   this.getString = function(initNum, initUnit, returnNum, returnUnit) {
      return `${initNum} ${this.spellOutUnit(initUnit)} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`
   }  

   this.getUnit = function(input) {
      const [num, units, extra] = input.split(/([a-z]+)/i)
      if (!units) {throw new Error("invalid unit")}
      if (extra) {throw new Error("invalid number and unit")}

      const a = units.toLowerCase()
      switch (a) {
         case "gal": {return "gal"}
         case "l": {return "L"}
         case "lbs": {return "lbs"}
         case "kg": {return "kg"}
         case "mi": {return "mi"}
         case "km": {return "km"}
         default: {
            throw new Error("invalid unit")
         }
      }
   }

   this.spellOutUnit = function(unit) {
      switch (unit) {
         case "gal": {return "gallons"}
         case "L": {return "liters"}
         case "lbs": {return "pounds"}
         case "kg": {return "kilograms"}
         case "mi": {return "miles"}
         case "km": {return "kilometers"}
         default: {
            // should be unreachable
            throw new Error("invalid argument for ConvertHandler.spellOutUnit")
         }
      }
   }
}

module.exports = ConvertHandler
