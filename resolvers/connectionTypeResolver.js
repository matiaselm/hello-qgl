import ConnectionType from '../models/connectionType.js';

export default {
  Connection: {
    ConnectionType(parent) {
      // console.log('connectionType', parent);
      return ConnectionType.findById(parent.ConnectionType);
    },
  },
};