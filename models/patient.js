module.exports = function (sequelize, DataTypes) {
  const Patient = sequelize.define("Patient", {
    patientName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    bloodType: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    patientCon: {
      type: DataTypes.STRING,
      
      // eslint-disable-next-line indent
      }
  });
  return Patient;
};
// const Sequelize = require("sequelize");
// const sequelize = require("../config/connection.js");


// const Patient = sequelize.define("patient", {
//   patientName: Sequelize.STRING,
//   bloodType: Sequelize.STRING,
//   patientCon: Sequelize.STRING
// });

// Patient.sync();

// module.exports = Patient;
