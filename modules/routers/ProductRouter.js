import express from 'express';
import { createEndpoint } from './BaseEndpoints.js';
import product from '../models/Product.js';

const productRouter = express.Router();

productRouter.post('/create', createEndpoint('POST', product));
productRouter.post('/update', createEndpoint('UPDATE', product));
productRouter.delete('/delete', createEndpoint('DELETE', product));
productRouter.get('/', createEndpoint('GET', product));

export default productRouter;