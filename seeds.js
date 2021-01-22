const db = require("./models");
//donor seeding
db.sequelize.sync({force: true}).then(() => {
  db.Donor.create({donorName: "John Smith", bloodType: "A -", canDonate: true});
  db.Donor.create({donorName: "Seth Staggs", bloodType: "O +", canDonate: true});
  db.Donor.create({donorName: "Catherine Fredrickson", bloodType: "0 +", canDonate: false});
  db.Donor.create({donorName: "Mary Johnson", bloodType: "AB -", canDonate: true});
  //patient seeding
  db.Patient.create({patientName: "Mark Twain", bloodType: "A -", patientCon: "N/A"});
  db.Patient.create({patientName: "Vlad Dracul", bloodType: "O +", patientCon: "Vampirism"});
  db.Patient.create({patientName: "Frodo Baggins", bloodType: "B +", patientCon: "SIckle cell Anemia"});
  db.Patient.create({patientName: "Gregori Rasputin", bloodType: "A -", patientCon: "Hemophila"});
});
