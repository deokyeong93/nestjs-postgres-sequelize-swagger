'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
module.exports = {
  up: async (
    queryInterface, //
    Sequelize,
  ) => {
    return queryInterface.createTable('Person', {
      name: Sequelize.DataTypes.STRING,
      isBetaMember: {
        type: Sequelize.DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
    });
  },
  down: async (
    queryInterface, //
    Sequelize,
  ) => {
    // 마이그레이션 실패시 내용 작성, 실패시 롤백 적용
    return queryInterface.dropTable('Person');
  },
};
