//Not sure if we need to require these here
var express = require("express");

// Import the model to use its database functions.
var db = require("../models");
var cloudinary = require('cloudinary');


// Create all our routes and set up logic within those routes where required.

module.exports = function(app) {
  //POST Methods
  app.post("/", function(req, res){
    console.log("Posting img from api-routes")
    cloudinary.v2.uploader.upload(req.body.image, function(error, result) {
      if(!error) {
        console.log(result.secure_url);
        db.Users.create({
          imgURL: result.secure_url
        })
      } else {
        console.log(error);
      }
    });
  });
  //PUT Methods
  app.put("/:id", function(req, res) {
    db.Users.update({
        //CULMN TO UPDATE
      }, {where: {
        //ROW(S) TO UPDATE
      }
    }).then(function(dbUsers) {
      res.redirect("/");
    })
  });
}