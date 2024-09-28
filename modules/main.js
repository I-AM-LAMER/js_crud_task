import express from 'express';
import cors from 'cors';
import product from './Product.js';
import classmate from './Classmate.js';
import cafeteria from './Cafeteria.js';
import pgPromise from 'pg-promise';
import { Serializers } from './assist.js'


const app = express();
const PORT = process.env.WEB_PORT;
const pgp = pgPromise({});

app.set('view engine', 'ejs');
console.log(process.env)

const connection = {
    host: process.env.POSTGRES_INNER_HOST,
    port: process.env.POSTGRES_INNER_PORT,
    database: process.env.POSTGRES_DB,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD
};

const db = pgp(connection);

app.use(cors());
app.use(express.json())

app.get('/', async (req, res) => {

    const classmates = await Serializers.querySerializer(classmate, db)
    const cafeterias = await Serializers.querySerializer(cafeteria, db)
    const products = await Serializers.querySerializer(product, db)

    res.render('templates/index.ejs', {
        classmates,
        cafeterias,
        products,
        title: 'Classmate Cafe Management System',
        message: 'Welcome to our management system!'
    });
})

app.get('/classmates', async (req, res) => {
    try {
        const classmates = await db.any('SELECT * FROM classmate');
        res.send(classmates)
    } 
    catch(e) {
        console.log(`ERROR: ${e}`)
    }
})

app.get('/cafeterias', async (req, res) => {
    try {
        const classmates = await db.any('SELECT * FROM cafeteria');
        res.send(classmates)
    } 
    catch(e) {
        console.log(`ERROR: ${e}`)
    }
})

app.post('/cafeteria')

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));


