"use strict"

// A file I modified.

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

   // I would have done this differently. As it stands, some of the logic is repeated in getUnits because of a silly insistence on a particular error message.
   this.getNum = function(input) {
      const [num, units, extra] = input.split(/([a-z]+)/i)
      if (extra) {throw new Error("invalid number and unit")}

      let result = 0
      let bad_number = false
      let bad_units = false

      if (!num) {return 1}
      else {
         const [na, nb, nc] = num.split(/\//)
         if (nc) {bad_number = true}
         else {
            const x = Number(na)
            if (nb) {
               const y = Number(nb)
               if (x > 0 && y > 0) {result = x / y}
               else {bad_number = true}
            }
            else if (x > 0) {result = x}
            else {bad_number = true}
         }
      }

      if (!units) {bad_units = true}
      else {
         const u = units.toLowerCase()
         switch (u) {
            case "gal": {break}
            case "l": {break}
            case "lbs": {break}
            case "kg": {break}
            case "mi": {break}
            case "km": {break}
            default: {bad_units = true}
         }
      }

      if (bad_number) {
         if (bad_units) {throw new Error("invalid number and unit")}
         else {throw new Error("invalid number")}
      }
      return result
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
      if (extra) {throw new Error("invalid number and unit")}
      if (!units) {throw new Error("invalid unit")}

      const u = units.toLowerCase()
      switch (u) {
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
