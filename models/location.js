import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const locationSchema = new Schema({
    type: String,
    coordinates: {
        type: [Number],
    }
},);

export default mongoose.model('Location', locationSchema);