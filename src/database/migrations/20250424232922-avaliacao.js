'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Avaliacao', {
      ID_Avaliacao: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      Comentario: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      Estrelas: {
        type: Sequelize.STRING(5),
        allowNull: true
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Avaliacao');
  }
};
