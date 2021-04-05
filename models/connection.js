import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const connectionSchema = new Schema({
    Quantity: Number,
    ConnectionType: {type: mongoose.Types.ObjectId, ref: 'ConnectionType'},
    LevelType: {type: mongoose.Types.ObjectId, ref: 'LevelType'}
});

export default mongoose.model('Connection', connectionSchema);