'use strict';
import ConnectionTypes from "../models/ConnectionTypes.js";

export default {
    Query: {
        connectiontypes: () => {
            return ConnectionTypes.find();
        }
    },
    Connection: {
        ConnectionTypeID(parent)  {
          //  console.log(parent);
            return ConnectionTypes.findById(parent.ConnectionTypeID);
        }
    }
}