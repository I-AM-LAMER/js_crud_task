import express from 'express';
import { createEndpoint } from './BaseEndpoints.js';
import classmate from '../models/Classmate.js';

const classmateRouter = express.Router();

classmateRouter.post('/create', createEndpoint('POST', classmate));
classmateRouter.post('/update', createEndpoint('UPDATE', classmate));
classmateRouter.delete('/delete', createEndpoint('DELETE', classmate));
classmateRouter.get('/', createEndpoint('GET', classmate));

export default classmateRouter;