'use strict';
import Level from '../models/level.js';

export default {
  Connection: {
    Level(parent) {
      // console.log('levelType', parent);
      return Level.findById(parent.LevelID);
    },
  },
};