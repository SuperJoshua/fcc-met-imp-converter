"use strict"

// A file I modified.

const chaiHttp = require("chai-http")
const chai = require("chai")
let assert = chai.assert
const server = require("../server")

chai.use(chaiHttp)

suite("Functional Tests", function() {
   test("convert a valid input such as 10L", function(done) {
      chai.request(server)
      .get("/api/convert?input=10L")
      .end(function(err, res) {
         assert.strictEqual(res.body.string, "10 liters converts to 2.64172 gallons")
         done()
      })
   })

   test("convert an invalid input such as 32g", function(done) {
      chai.request(server)
      .get("/api/convert?input=32g")
      .end(function(err, res) {
         assert.strictEqual(res.text, "invalid unit")
         done()
      })
   })

   test("convert an invalid number such as 3/7.2/4kg", function(done) {
      chai.request(server)
      .get("/api/convert?input=3/7.2/4kg")
      .end(function(err, res) {
         assert.strictEqual(res.text, "invalid number")
         done()
      })
   })

   //Kilomegagram? I suppose that'd be a gigagram. (:
   test("convert an invalid number AND unit such as 3/7.2/4kilomegagram", function(done) {
      chai.request(server)
      .get("/api/convert?input=3/7.2/4kilomegagram")
      .end(function(err, res) {
         assert.strictEqual(res.text, "invalid number and unit")
         done()
      })
   })

   test("convert with no number such as kg", function(done) {
      chai.request(server)
      .get("/api/convert?input=kg")
      .end(function(err, res) {
         assert.strictEqual(res.body.string, "1 kilograms converts to 2.20462 pounds")
         done()
      })
   })
})
