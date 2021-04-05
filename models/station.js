import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const stationSchema = new Schema({
    id: String,
    Title: String,
    Town: String,
    AddressLine1: String,
    StateOrProvince: String,
    Location: { type: mongoose.Types.ObjectId, ref: 'Location' },
    Connections: [{ type: mongoose.Types.ObjectId, ref: 'Connections' }],
});

export default mongoose.model('Station', stationSchema);