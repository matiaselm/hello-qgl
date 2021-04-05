import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const levelTypeSchema = new Schema({
        id: String,
        title: String,
        comments: String,
        isFastChargeCapable: Boolean
    });

export default mongoose.model('LevelType', levelTypeSchema);