import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({
    firstname: string,
    lastname: string,
    email: string
});

export default mongoose.model('Contact', contactSchema);