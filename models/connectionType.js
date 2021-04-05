import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const connectionTypeSchema = new Schema({
    id: String,
    FormalName: String,
    Title: String
});

export default mongoose.model('ConnectionType', connectionTypeSchema);