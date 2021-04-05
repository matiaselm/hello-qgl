import ConnectionType from '../models/connectionType.js';

export default {
  Connection: {
    connectionType(parent) {
      console.log('connectionType', parent);
      return ConnectionType.findById(parent.connectionType);
    },
  },
};