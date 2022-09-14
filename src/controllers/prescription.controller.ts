import { NextFunction, Request, Response } from 'express';
import { PrescriptionRepository } from './../repository';

class PrescriptionController {
    async findByCode(req: Request, res: Response, next: NextFunction) {
        const { code } = req.params;
        const prescription = await PrescriptionRepository.findByCode(code);
        res.status(200).json(prescription);
        next();
    }
}

export const prescriptionController = new PrescriptionController();

export default prescriptionController;
