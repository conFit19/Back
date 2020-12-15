'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('events', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      place: {
        type: Sequelize.STRING
      },
      capacity: {
        type: Sequelize.INTEGER
      },
      time: {
        type: Sequelize.STRING
      },
      duration: {
        type: Sequelize.STRING
      },
      type: {
        type: Sequelize.STRING
      },
      day: {
        type: Sequelize.DATE
      },
      UserId: {
        type: Sequelize.INTEGER,
        references: {
          model:'users',
          key: 'id'
        },
        onUpdate: 'SET NULL',
        onDelete: 'SET NULL'
      },
      age: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('events');
  }
};