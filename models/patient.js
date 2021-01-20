module.exports = function (sequelize, DataTypes) {
  const Patient = sequelize.define("Donor", {
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
      default: true
      // eslint-disable-next-line indent
      }
  });
  return Patient;
};