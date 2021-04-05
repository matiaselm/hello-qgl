import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const locationSchema = new Schema({
    type: String,
    coordinates: [Number, Number]
});

export default mongoose.model('Location', locationSchema);