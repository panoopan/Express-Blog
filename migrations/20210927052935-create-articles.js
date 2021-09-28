"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Articles", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING(64),
      },
      tag: {
        allowNull: false,
        type: Sequelize.STRING(64),
      },
      thumbnail: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      content: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      isDeleted: {
        defaultValue: null,
        type: Sequelize.TINYINT,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Articles");
  },
};
