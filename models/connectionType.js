import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const connectionTypeSchema = new Schema({
    id: String,
    formalName: String,
    title: String
});

export default mongoose.model('ConnectionType', connectionTypeSchema);