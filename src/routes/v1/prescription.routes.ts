import express from 'express';
import controller from '../../controllers/prescription.controller';

export const prescriptionsRoutes = express.Router();

prescriptionsRoutes.get('/:code/code', controller.findByCode);
