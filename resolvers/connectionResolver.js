'use strict';
import Connection from '../models/connection.js';

export default {
  Station: {
    Connections(parent) {
      // console.log('connection', parent);
      return parent.Connections.map(id => Connection.findById(id))
    },
  },
};