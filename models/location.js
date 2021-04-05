import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const locationSchema = new Schema({
    type: {
        type: String,
        enum: ['Point']
    },
    coordinates: {
        type: [Number],
    }
},);

export default mongoose.model('Location', locationSchema);