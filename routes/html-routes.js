// Requiring path to so we can use relative routes to our HTML files
const path = require("path");

// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../config/middleware/isAuthenticated");
const db = require("../models");

module.exports = function(app) {
  app.get("/", (req, res) => {
    console.log (req.user);
    // If the user already has an account send them to the members page
    console.log("test");
    if (req.user) {
      res.redirect("/members");
    }
    res.sendFile(path.join(__dirname, "../public/signup.html"));
    //res.render("index");
  });

  app.get("/login", (req, res) => {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/members", isAuthenticated, (req, res) => {
    //res.render("home");

    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
  app.get("/donors", isAuthenticated, (req, res) => {
    db.Donor.findAll({raw: true}).then(data =>{
      console.log(data);
      res.render("donor",{
        donors: data
      });
    });
  });
  app.get("/patients", isAuthenticated, (req, res) => {
    db.Patient.findAll({raw: true}).then(data =>{
      console.log(data);
      res.render("patient",{
        patients: data
      });
    });
  });
  // app.get("/blood", (req, res) => {
  
  // });
};
