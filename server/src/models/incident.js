'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class incident extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  incident.init(
    {
      description: DataTypes.STRING,
      actions: DataTypes.STRING,
      name: DataTypes.STRING,
      date: DataTypes.DATE,
      status: DataTypes.STRING,
      reason: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'incident'
    }
  );
  return incident;
};
