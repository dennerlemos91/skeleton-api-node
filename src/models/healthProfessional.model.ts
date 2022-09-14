import mongoose, { Document, Schema, Types } from 'mongoose';

export interface IHealthProfessional {
    email: string;
}

export interface IHealthProfessionalModel extends IHealthProfessional, Document {}

const HealthProfessionalSchema: Schema = new Schema(
    {
        userId: { type: Types.ObjectId, ref: 'users', index: true }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

HealthProfessionalSchema.set('toJSON', {
    virtuals: true
});

HealthProfessionalSchema.virtual('user', {
    ref: 'users',
    localField: 'userId',
    foreignField: '_id',
    justOne: true
});

export default mongoose.model<IHealthProfessionalModel>('healthProfessionals', HealthProfessionalSchema);
