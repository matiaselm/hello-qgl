import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const stationSchema = new Schema({
    id: String,
    Title:String,
    Town: String,
    AddressLine: String,
    StateOrProvince: String,
    Location:{
        type: String,
        coordinates: [Number, Number]
    },
    Connections: [{
        Quantity: Number,
        ConnectionType: {
            id: String,
            FormalName: String,
            Title: String
        },
        LevelType: {
            id: String,
            Title: String,
            Comments: String,
            IsFastChargeCapable: Boolean
        }
    }]
});

export default mongoose.model('Station', stationSchema);