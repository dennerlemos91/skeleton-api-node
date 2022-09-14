import { PrescriptionModel } from '../models';
import { IPrescription } from '../models/prescription.model';
import IPrescriptionRepository from './IPrescriptionRepository';

class PrescriptionRepository implements IPrescriptionRepository {
    async findByCode(code: string): Promise<IPrescription> {
        const prescription = await PrescriptionModel.findOne({ code }).populate('healthProfessional').lean();
        if (prescription) {
            return prescription;
        }
        throw new Error('Prescrição não encontrada!');
    }
}

export const prescriptionRepository = new PrescriptionRepository();

export default prescriptionRepository;
