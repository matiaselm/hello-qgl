import Connection from '../models/connection.js';

export default {
  Station: {
    connection(parent) {
      console.log('connection', parent);
      return Connection.findById(parent.connection);
    },
  },
};