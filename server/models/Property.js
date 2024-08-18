import mongoose from 'mongoose';

const propertySchema = new mongoose.Schema({
    title: { type: String, required: true },
    location: { type: String, required: true },
    price: { type: Number, required: true },
    status: { type: String, enum: ['available', 'sold'], required: true },
    image: { type: String } // URL of the image
});

const Property = mongoose.model('Property', propertySchema);

export default Property;
    