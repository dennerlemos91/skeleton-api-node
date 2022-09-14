import mongoose, { Document, Schema } from 'mongoose';

export interface IUser {
    email: string;
}

export interface IUserModel extends IUser, Document {}

const UserSchema: Schema = new Schema(
    {
        email: { type: String, required: true }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

export default mongoose.model<IUserModel>('users', UserSchema);
