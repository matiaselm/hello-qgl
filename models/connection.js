import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const connectionSchema = new Schema({
    quantity: Number,
    connectionType: {type: mongoose.Types.ObjectId, ref: 'ConnectionType'},
    levelType: {type: mongoose.Types.ObjectId, ref: 'LevelType'}
});

export default mongoose.model('Connection', connectionSchema);