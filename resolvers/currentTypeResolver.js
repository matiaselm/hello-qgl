'use strict';
import CurrentType from "../models/currentType.js";

export default {
    Query: {
        CurrentTypes: () => {
            return CurrentType.find();
        }
    },
    Connection: {
        CurrentTypeID(parent)  {
          //  console.log('currentTypeID parent', parent);
            return CurrentType.findById(parent.CurrentTypeID);
        }
    }
}