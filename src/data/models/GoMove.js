import DataType from 'sequelize';
import Model from '../sequelize';

const GoMove = Model.define(
  'GoMove',
  {
    id: {
      type: DataType.CHAR,
      primaryKey: true,
    },
    move: {
      type: DataType.STRING,
      defaultValue: '[]',
      get: function() {
        return JSON.parse(this.getDataValue('move'));
      },
      set: function(val) {
        return this.setDataValue('move', JSON.stringify(val));
      }
    }
  },
);

export default GoMove;
