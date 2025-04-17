import express from 'express';
import http from  'http';
import bodyparser from 'body-parser';
import cookieparser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';
import mongoose from 'mongoose';

import router from './router/rex'

const app= express();

app.use(cors({
    credentials: true,
}));

app.use(compression());
app.use(cookieparser());
app.use(bodyparser.json());

const server = http.createServer(app);

server.listen(8000,() => {
    console.log("server running on localhost http://localhost:8000/");
});

const MONGO_URL = 'mongodb+srv://mwanafunziv:pasword101@cluster0.w7mmry6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

mongoose.Promise = Promise;
mongoose.connect(MONGO_URL);
mongoose.connection.on('error', (error: Error) => console.log(error));

app.use('/', router());

