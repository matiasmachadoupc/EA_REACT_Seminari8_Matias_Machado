import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
    name: string;
    age: number;
    email: string;
    password: string;
    phone?: number;
}

const UserSchema: Schema = new Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone: { type: Number },
});

const User = mongoose.model<IUser>('User', UserSchema);
export default User;