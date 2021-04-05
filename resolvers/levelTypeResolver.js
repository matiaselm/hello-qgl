import LevelType from '../models/levelType.js';

export default {
  Connection: {
    levelType(parent) {
      console.log('levelType', parent);
      return LevelType.findById(parent.levelType);
    },
  },
};