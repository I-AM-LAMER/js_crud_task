import express from 'express';
import { createEndpoint } from './BaseEndpoints.js';
import cafeteria from '../models/Cafeteria.js';

const cafeteriaRouter = express.Router();

cafeteriaRouter.post('/create', createEndpoint('POST', cafeteria));
cafeteriaRouter.post('/update', createEndpoint('UPDATE', cafeteria));
cafeteriaRouter.delete('/delete', createEndpoint('DELETE', cafeteria));
cafeteriaRouter.get('/', createEndpoint('GET', cafeteria));

export default cafeteriaRouter;