import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const levelTypeSchema = new Schema({
        id: String,
        Title: String,
        Comments: String,
        IsFastChargeCapable: Boolean
    });

export default mongoose.model('LevelType', levelTypeSchema);