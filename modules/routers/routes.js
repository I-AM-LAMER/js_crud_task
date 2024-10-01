import express from 'express';
import { Querying } from '../assist.js';
import classmate from '../models/Classmate.js';
import product from '../models/Product.js';
import cafeteria from '../models/Cafeteria.js';
import classmateRouter from './ClassmateRouter.js';
import productRouter from './ProductRouter.js';
import cafeteriaRouter from './CafeteriaRouter.js';
import db from '../main.js';

const router = express.Router();

router.route('/').get( async (req, res) => {
    const classmates = await Querying.queryAll(classmate, db)
    const cafeterias = await Querying.queryAll(cafeteria, db);
    const products = await Querying.queryAll(product, db);
    res.render('../views/templates/index.ejs', {
      classmates,
      cafeterias,
      products,
      title: 'Classmate Cafe Management System',
      message: 'Welcome to our management system!'
    });
});

router.use('/cafeterias', cafeteriaRouter);
router.use('/classmates', classmateRouter);
router.use('/products', productRouter);

export default router;