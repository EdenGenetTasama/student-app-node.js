require('dotenv').config();
require('./DB/studentDB');

const express = require('express');
const app = express();
const router = require('./router/student-router');

app.use(express.json())

app.use('/api', router);

app.listen(process.env.port , (req,res)=>{
    console.log(`Server is up in ${process.env.port} `);
})


