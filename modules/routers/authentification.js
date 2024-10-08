import express from 'express';
import { Querying } from '../assist.js';
import db from '../main.js';
import bcrypt from 'bcrypt';

const AuthRouter = express.Router()

AuthRouter.get('/login', (req, res) => {
    res.render('../views/templates/login.ejs')
})

AuthRouter.get('/register', (req, res) => {
    res.render('../views/templates/register.ejs')
})

AuthRouter.post('/login', async (req, res) => {
    const body = req.body

    const query = await Querying.checkForUser(body['username'], db)
    if(query)
    {
        const match = await bcrypt.compare(body['password'], query.password)
        if(match){
            res.status(200).json({message: 'Request processed successfully'});
        }else{
            res.status(401).json({message: 'Incorrect username or password'})
        }
    }else{
        res.status(401).json({ message: 'Incorrect username or password' });
    }
})

AuthRouter.post('/register', async (req, res) => {
    let body = req.body
    body['password'] = await bcrypt.hash(body['password'], 10)
    const query = await Querying.createUser(body, db)
    if(query)
    {
        res.status(200).json({message: 'Request processed successfully'});
    }else{
        res.status(401).json({ message: 'Invalid credentials' });
    }
})

export default AuthRouter