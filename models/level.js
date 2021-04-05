import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const levelTypeSchema = new Schema({
        title: String,
        comments: String,
        isFastChargeCapable: Boolean
    });

export default mongoose.model('Level', levelTypeSchema);