"use strict"

const ConvertHandler = require("../controllers/convertHandler.js")

module.exports = function (app) {
  
   let ch = new ConvertHandler()

   app.get("/api/convert", (req, res) => {
      const input = req.query.input
      try {
         const initNum = ch.getNum(input)
         const initUnit = ch.getUnit(input)
         const returnNum = ch.convert(initNum, initUnit)
         const returnUnit = ch.getReturnUnit(initUnit)
         const string = ch.getString(initNum, initUnit, returnNum, returnUnit)
         res.send({initNum, initUnit, returnNum, returnUnit, string})
      } catch (err) {
         res.send(err.message)
      }
   })
}
