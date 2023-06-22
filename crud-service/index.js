import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import Routes from './server/route.js';
import Connection from './database/db.js';

const app = express();
dotenv.config();

// To handle HTTP POST requests in Express.js version 4 and above, 
// you need to install the middleware module called body-parser.
// body-parser extracts the entire body portion of an incoming request stream and exposes it on req.body.
app.use(bodyParser.json({extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use('/', Routes);

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const PORT = process.env.PORT;

Connection(USERNAME, PASSWORD);

//static files
app.use(express.static(path.join(__dirname, '/crud-app/build')));
app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'crud-app', 'build', 'index.html'))
);
 
app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));