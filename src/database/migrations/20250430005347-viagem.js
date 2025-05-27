'use strict';

const sequelize = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.createTable('viagem',{
      idViagem:{
        primaryKey:true,
        type: Sequelize.INTEGER,
        allowNull:false,
        autoIncrement:true,
      },
      partidaMotorista:{
        allowNull:false,
        type: Sequelize.DATEONLY,
      },
      partidaPassageiro:{
        allowNull:false,
        type: Sequelize.DATEONLY,
      },
      pontoDestino:{
        allowNull:false,
        type: Sequelize.DATEONLY,
      },
      horarioSaida:{
        allowNull:false,
        type: Sequelize.DATEONLY,
      },
      horarioEntrada:{
        allowNull:false,
        type: Sequelize.DATEONLY,
      },
      idVeiculo:{
        type: Sequelize.INTEGER,
        allowNull:false,
        references:{
          model:"veiculo",
          key:"ID_veiculo",
      }},
      idUsuario:{
        type: Sequelize.INTEGER,
        allowNull:false,
        references:{
          model:"usuario",
          key:"idUsuario"
        }
      }

   })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('viagem');
}
};
