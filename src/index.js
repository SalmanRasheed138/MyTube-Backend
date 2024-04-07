import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './db/index.js';

dotenv.config({
    path: '/.env'
});

const app = express();


app.listen(process.env.PORT, () => {
    console.log('App is listing on port: ', process.env.PORT);
});
connectDB();

// (async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//         app.on('error', (err) => {
//             console.log('Error', err);
//         })

//         app.listen(process.env.PORT, () => {
//             console.log(`App is listing on port ${process.env.PORT}`)
//         })

//     } catch (err) {
//         console.erroe('Error:', err);
//         throw err;
//     }
// })()





