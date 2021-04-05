'use strict';
import ConnectionType from "../models/connectionType.js";

export default {
    Query: {
        ConnectionTypes: () => {
            return ConnectionType.find();
        }
    },
    Connection: {
        ConnectionType: (parent) => {
          return ConnectionType.findById(parent.ConnectionTypeID);
        }
    }
}