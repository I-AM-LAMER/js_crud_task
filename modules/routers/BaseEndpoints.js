// BaseEndpoint.js

import { Querying } from '../assist.js';
import db from '../main.js';

export function createEndpoint(method, model) {
  return async (req, res) => {
    try {
      const data = req.body;
      let response;
      
      switch (method.toLowerCase()) {
        case 'get':
            response = await Querying.queryAll(model, db);
            res.send(response)
            break;
        case 'post':
            response = await Querying.create(model, data, db);
            res.send(response)
            break;
        case 'update':
            response = await Querying.update(model, data, db);
            res.send(response)
            break;
        case 'delete':
            response = await Querying.delete(model, data, db);
            res.send(response)
            break;
        default:
            throw new Error('Method not allowed');
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
}
