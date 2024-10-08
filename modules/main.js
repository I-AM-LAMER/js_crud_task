import express from 'express';
import router from './routers/routes.js';
import pgPromise from 'pg-promise';

const connection = {
    host: process.env.POSTGRES_INNER_HOST,
    port: process.env.POSTGRES_INNER_PORT,
    database: process.env.POSTGRES_DB,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD
};

const pgp = pgPromise({});

const db = pgp(connection);

const app = express();
const PORT = process.env.PORT || 5000;

app.set('view engine', 'ejs');

app.use(express.json());
app.use('/', router);


app.listen(PORT, () => console.log(`Server running on: http://localhost:${PORT}`));

export default db;