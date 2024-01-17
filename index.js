
import express from 'express'
import mongoose from 'mongoose'
import router from './router.js';
import 'dotenv/config';

const apiUrl = process.env.URL;
console.log(apiUrl)
const PORT = 5001;
const urlBD = apiUrl;
const app = express()

app.use(express.json())
app.use('/api', router)



async function startApp() {
    try {
        await mongoose.connect(urlBD);
        app.listen(PORT, () =>  console.log('serv started' + PORT));
    } catch (error) {
        console.log(error)
    }
}

startApp();
 