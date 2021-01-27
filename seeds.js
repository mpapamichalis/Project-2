const db = require("./models");
//donor seeding
db.sequelize.sync({force: true}).then(() => {
  db.Donor.create({donorName: "D001", bloodType: "A -", canDonate: true});
  db.Donor.create({donorName: "D002", bloodType: "O +", canDonate: true});
  db.Donor.create({donorName: "D003", bloodType: "0 +", canDonate: false});
  db.Donor.create({donorName: "D004", bloodType: "AB -", canDonate: true});
  //patient seeding
  db.Patient.create({patientName: "P001", bloodType: "A -", patientCon: "N/A"});
  db.Patient.create({patientName: "P002", bloodType: "O +", patientCon: "Vampirism"});
  db.Patient.create({patientName: "P003", bloodType: "B +", patientCon: "Sickle Cell Anemia"});
  db.Patient.create({patientName: "P004", bloodType: "A -", patientCon: "Hemophilia"});
});
