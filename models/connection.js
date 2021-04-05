import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const connectionSchema = new Schema({
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
});

export default mongoose.model('Connection', connectionSchema);