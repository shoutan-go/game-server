
import DataType from 'sequelize';
import Model from '../sequelize';

const GoInfo = Model.define(
  'GoInfo',
  {
    id: {
      type: DataType.CHAR,
      primaryKey: true,
    },
    rule: {
      type: DataType.CHAR,
      allowNull: false,
    },
    boardsize: {
      type: DataType.INTEGER,
      allowNull: false,
    },
    handicap: {
      type: DataType.INTEGER,
      defaultValue: 0,
    },
    komi: {
      type: DataType.STRING,
      defaultValu: '6.5',
      allowNull: false,
    },
    black: {
      type: DataType.UUID,
    },
    white: {
      type: DataType.UUID,
    },
    result: {
      type: DataType.STRING,
    },
    goal: {
      type: DataType.INTEGER,
    }
  },
);

export default GoInfo;
