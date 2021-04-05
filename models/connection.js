import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const connectionSchema = new Schema ({
    Quantity: Number,
    ConnectionTypeID: {type: mongoose.Schema.Types.ObjectID, ref: 'ConnectionType'},
    LevelID: {type: mongoose.Schema.Types.ObjectID, ref: 'Level'},
    CurrentTypeID: {type: mongoose.Schema.Types.ObjectID, ref: 'CurrentType'}
});

export default mongoose.model('Connection', connectionSchema);