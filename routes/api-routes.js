// Requiring our models and passport as we've configured it
const db = require("../models");
const passport = require("../config/passport");

module.exports = function (app) {
  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  app.post("/api/login", passport.authenticate("local"), (req, res) => {
    // Sending back a password, even a hashed password, isn't a good idea
    res.json({
      email: req.user.email,
      id: req.user.id
    });
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/signup", (req, res) => {
    db.User.create({
      email: req.body.email,
      password: req.body.password
    })
      .then(() => {
        res.redirect(307, "/api/login");
      })
      .catch(err => {
        res.status(401).json(err);
      });
  });

  // Route for logging user out
  app.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });
  
  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", (req, res) => {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });
  //Donor get all route
  app.get("/api/donor_data", (req, res) => {
    db.Donor.findAll({}).then((results) => {
      res.json(results);
    });
  });
  //Patient get all route
  app.get("/api/patient_data", (req,res) => {
    db.Patient.findAll({}).then((results) => {
      res.json(results);
    });
  });
  //New Donor
  app.post("/api/newDonor", (req) => {
    console.log("Donor Data:");
    console.log(req.body);

    db.Donor.create({
      donorName: req.body.donorName,
      bloodType: req.body.bloodType,
      canDonate: req.body.canDonate
    // eslint-disable-next-line no-unused-vars
    }).then((results) => {
      res.end();
    });
  });
  //New Patient
  app.post("/api/newPatient", (req) => {
    console.log("Patient Data:");
    console.log(req.body);

    db.Patient.create({
      patientName: req.body.patientName,
      bloodType: req.body.bloodType,
      patientCon: req.body.patientCon
    // eslint-disable-next-line no-unused-vars
    }).then((results) => {
      res.end();
    });
  });
};
