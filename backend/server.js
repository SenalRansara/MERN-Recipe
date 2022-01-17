const express = require('express');
const mongoose = require('mongoose');
require ("dotenv").config();

const app = express();

const PORT = 8000;
const URL = process.env.MONGODB_URL;


mongoose.connect(URL).then(()=> {
    console.log('DB Connected Successfully');
})
.catch((err) => console.log('DB Connection Error',err));

app.listen(PORT,()=>{
    console.log(`App is running on ${PORT}`);
});
