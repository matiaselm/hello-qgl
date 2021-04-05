import LevelType from '../models/levelType.js';

export default {
  Connection: {
    LevelType(parent) {
      console.log('levelType', parent);
      return LevelType.findById(parent.levelType);
    },
  },
};