module.exports = function (sequelize, DataTypes) {
  const Donor = sequelize.define("Donor", {
    donorName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    bloodType: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    canDonate: {
      type: DataTypes.BOOLEAN,
      default: true
    }
  });
  return Donor;
};