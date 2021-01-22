// module.exports = function (sequelize, DataTypes) {
//   const Donor = sequelize.define("Donor", {
//     donorName: {
//       type: DataTypes.STRING,
//       allowNull: false
//     },
//     bloodType: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     canDonate: {
//       type: DataTypes.BOOLEAN,
//       default: true
//     }
//   });
//   return Donor;
// };

const Sequelize = require("sequelize");
const sequelize = require("../config/connection.js");


const Donor = sequelize.define("donor", {
  donorName: Sequelize.STRING,
  bloodType: Sequelize.STRING,
  canDonate: Sequelize.BOOLEAN
});

Donor.sync();

module.exports = Donor;
