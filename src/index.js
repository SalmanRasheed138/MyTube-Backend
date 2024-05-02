import dotenv from 'dotenv';
import { connectDB } from './db/index.js';
import { app } from './app.js';

dotenv.config({
    path: '/.env'
});


connectDB()
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log('App is listening on port: ', process.env.PORT);
        });

        app.on('error', (err) => {
            console.log('Error', err);
        });
    })
    .catch((error) => {
        console.log("Mongo DB connection failed !! ", error);
    });


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





