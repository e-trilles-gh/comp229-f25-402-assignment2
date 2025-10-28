import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    created: Date,
    updated: Date
});

userSchema.pre('save', async function (next) {
    if(this.isModified('password') || this.isNew) {
        // Hashing - the example shuffles the password x10
        this.password = await bcrypt.hash(this.password, 10)  
    }
    next();
})

userSchema.methods.comparePassword = async function(password) {
    return await bcrypt.compare(password, this.password);
}

export default mongoose.model('User', userSchema);