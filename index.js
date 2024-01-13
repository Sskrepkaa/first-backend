
import express from 'express'

const PORT = 5001;

const app = express()

app.use(express.json())

app.post('/', (req, res) => {
    console.log(req.body);
    res.status(200).json('serv workddd')
})

app.listen(PORT, () =>  console.log('serv started' + PORT))