"use strict"

const chaiHttp = require("chai-http")
const chai = require("chai")
let assert = chai.assert
const server = require("../server")

chai.use(chaiHttp)

// GET requests to /api/convert
suite("Functional Tests", function() {
   // convert a valid input such as 10L

   // convert an invalid input such as 32g

   // convert an invalid number such as 3/7.2/4kg

   // convert an invalid number AND unit such as 3/7.2/4kilomegagram
   // Kilomegagram? I suppose that'd be a gigagram. (:

   // convert with no number such as kg
})
