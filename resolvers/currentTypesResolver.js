'use strict';
import CurrentTypes from "../models/CurrentTypes.js";

export default {
    Query: {
        currenttypes: () => {
            return CurrentTypes.find();
        }
    },
    Connection: {
        CurrentTypeID(parent)  {
            return CurrentTypes.findById(parent.CurrentTypeID);
        }
    }
}