import DataType from 'sequelize';
import Model from '../sequelize';

const MatchGame = Model.define('MatchGame', {
  id: {
    type: DataType.UUID,
    defaultValue: DataType.UUIDV1,
    primaryKey: true,
  },
  match: {
    type: DataType.UUID,
    allowNull: false,
  },
  player: {
    type: DataType.UUID,
    allowNull: false,
  },
  game: {
    type: DataType.CHAR(128),
    allowNull: false,
  },
});

export default MatchGame;
