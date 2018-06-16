import DataType from 'sequelize';
import Model from '../sequelize';

const MatchInfo = Model.define('MatchInfo', {
  id: {
    type: DataType.UUID,
    defaultValue: DataType.UUIDV1,
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
  expiredIn: {
    type: DataType.INTEGER,
    defaultValue: 10 * 60,
  },
  goal: {
    type: DataType.INTEGER,
  },
});

export default MatchInfo;
