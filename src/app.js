import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';


const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));

// accept form data in json
app.use(express.json({
    limit: '16kb',
}));

// accept url data
app.use(express.urlencoded({
    limit: '16kb',
    extended: true
}));

// store assets (file, folder) in it
app.use(express.static("public"));

// read and write browser cookies
app.use(cookieParser());


export { const }

