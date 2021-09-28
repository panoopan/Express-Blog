"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Articles extends Model {
    static associate(models) {
      Articles.belongsTo(models.Users, {
        foreignKey: "username",
      });
    }
  }
  Articles.init(
    {
      title: DataTypes.STRING,
      tag: DataTypes.STRING,
      thumbnail: DataTypes.TEXT,
      content: DataTypes.TEXT,
      isDeleted: DataTypes.TINYINT,
    },
    {
      sequelize,
      modelName: "Articles",
    }
  );
  return Articles;
};
