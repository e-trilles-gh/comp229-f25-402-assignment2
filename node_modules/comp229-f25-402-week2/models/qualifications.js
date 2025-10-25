import mongoose from 'mongoose';

const qualificationSchema = new mongoose.Schema({
    title: string,
    firstname: string,
    lastname: string,
    email:	string,
    completion: Date,
    description: string
});

export default mongoose.model('Qualification', qualificationSchema);