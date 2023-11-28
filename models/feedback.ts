import mongoose from 'mongoose';

const feedbackSchema = new mongoose.Schema({
    review: String,
    rating: Number,
    comments: String
});

export default mongoose.model('Feedback', feedbackSchema);
