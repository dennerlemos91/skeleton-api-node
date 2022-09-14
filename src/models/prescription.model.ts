import mongoose, { Document, Schema, Types } from 'mongoose';

export interface IPrescription {
    code: string;
}

export interface IPrescriptionModel extends IPrescription, Document {
    healthProfessional: any;
}

const PrescriptionSchema: Schema = new Schema(
    {
        code: { type: String, required: true },
        prescriber: { type: Types.ObjectId, ref: 'users' }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

PrescriptionSchema.set('toJSON', {
    virtuals: true
});

PrescriptionSchema.virtual('healthProfessional', {
    ref: 'healthProfessionals',
    localField: 'prescriber',
    foreignField: 'userId',
    justOne: true
});

export default mongoose.model<IPrescriptionModel>('prescriptions', PrescriptionSchema);
