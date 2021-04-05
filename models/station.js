'use strict';
import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const stationSchema = new Schema({
    _id: String,
    Title: String,
    Town: String,
    AddressLine1: String,
    StateOrProvince: String,
    Postcode: String,
    Location: {
        type: {
            type: String,
            enum: ['Point']
        },
        coordinates: {
            type: [Number],
        }
    },
    Connections: [{ type: mongoose.Types.ObjectId, ref: 'Connection' }],
});

export default mongoose.model('Station', stationSchema);