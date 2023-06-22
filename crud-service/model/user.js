import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    name: String,
    username: String,
    email: String,
    phone: Number
});

const UserModel = mongoose.model('user', userSchema);

export default UserModel;
