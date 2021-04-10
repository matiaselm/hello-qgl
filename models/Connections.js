'use strict';
import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const connectionsSchema = new Schema({
    Quantity: Number,
    ConnectionTypeID: {
        type: Schema.Types.ObjectID,
        ref: 'ConnectionTypeID'
    },
    LevelID: {
        type: Schema.Types.ObjectID,
        ref: 'LevelID'
    },
    CurrentTypeID: {
        type: Schema.Types.ObjectID,
        ref: 'CurrentTypeID'
    }
});

export default mongoose.model('Connections', connectionsSchema);