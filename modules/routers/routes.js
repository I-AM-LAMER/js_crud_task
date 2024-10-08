import express from 'express';
import { Querying } from '../assist.js';
import classmate from '../models/Classmate.js';
import product from '../models/Product.js';
import cafeteria from '../models/Cafeteria.js';
import classmateRouter from './ClassmateRouter.js';
import productRouter from './ProductRouter.js';
import cafeteriaRouter from './CafeteriaRouter.js';
import db from '../main.js';
import { createEndpoint } from './BaseEndpoints.js';
import models from '../models/models_saving.js';
import AuthRouter from './authentification.js';

function findModelByName(model_name){
  const foundEntry = Array.from(models.entries()).find(([model, list]) => model.name === model_name);
  const foundModel = foundEntry ? foundEntry[0] : null;
  return foundModel
}

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
      message: 'Welcome to our management system!',
    });
});

router.route('/create').get( async (req, res) => {
  const model = req.query.model
  const model_class = findModelByName(model)

  let instance = new model_class()
  res.render('../views/templates/create.ejs', {
    instance
  });
});

router.route('/edit').get( async (req, res) => {
  const model = req.query.model
  const id = req.query.id

  let instance = models.get(findModelByName(model)).find(inst => inst.id == id)
  res.render('../views/templates/edit.ejs', {
    instance
  });
});

router.use('/auth', AuthRouter);
router.use('/cafeterias', cafeteriaRouter);
router.use('/classmates', classmateRouter);
router.use('/products', productRouter);

export default router;