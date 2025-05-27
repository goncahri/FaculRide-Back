'use strict';

const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable("logAcesso",{
      idUsuario:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        model:"usuario",
        key:"idUsuario",
      },
      dataAcesso:{
        type:DataTypes.DATE,
        allowNull:false,
      },
      tipoUsuario:{
        type: Sequelize.ENUM("passageiro", "motorista"),
        allowNull: false,
        model:"usuario",
        key:"tipoUsuario",
      },
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable("logAcesso");
  }
};
