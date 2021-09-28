"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("Articles", "username", {
      type: Sequelize.STRING(64),
      allowNull: false,
      references: {
        model: "Users",
        key: "username",
      },
      onUpdate: "CASCADE",
      onDelete: "RESTRICT",
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn("Articles", "username");
  },
};
