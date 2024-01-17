
import express from 'express'
import mongoose from 'mongoose'
import router from './router.js';

const PORT = 5001;
const urlBD = "mongodb+srv://user:123@cluster0.md2vsby.mongodb.net/?retryWrites=true&w=majority";
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
 