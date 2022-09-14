import { IPrescription } from './../models/prescription.model';

export default interface IPrescriptionRepository {
    findByCode(code: string): Promise<IPrescription>;
}
