import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    username: { type : String, required: true, },
    email: {  type : String ,required : true,},
    authentication: {
        password: { type: String, required: true, select: false },
        salt: { type: String, select: false},
        sessionToken: { type: String, select: false},
    },
});

export const UserModel = mongoose.model('user', UserSchema);

export const getUsers = () => UserModel.find();
export const getUserByEmail = (email: String) => UserModel.findOne({email});
export const getUserBySessionToken = (sessionToken: String) => UserModel.findOne({
    'authentication.sessionToken': sessionToken,
});
export const getUserByID = (id: string) => UserModel.findById(id);
export const createUser = ( values:Record<string, any>) => new UserModel(values)
.save().then((user) => user.toObject());
export const deleteUserByID = (id: String) => UserModel.findOneAndDelete({ _id: id});
export const updateUserByID = (id: string, values: Record<string, any>) => UserModel.findByIdAndUpdate(id, values)