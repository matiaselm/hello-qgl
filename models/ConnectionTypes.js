import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const connectionTypesSchema = new Schema ({
    FormalName: String,
    Title: String,
});

export default mongoose.model('ConnectionType', connectionTypesSchema);