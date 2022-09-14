import express from 'express';
import { prescriptionsRoutes } from './prescription.routes';

export const routes = express.Router();

routes.use('/prescriptions', prescriptionsRoutes);
