const express = require('express');
const mongoose = require('mongoose');

const app = express();

const PORT = 8000;
const DB_URL = 'mongodb+srv://senal:senal123@recipe.cbqdg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongoose.connect(DB_URL).then(()=> {
    console.log('DB Connected Successfully');
})
.catch((err) => console.log('DB Connection Error',err));

app.listen(PORT,()=>{
    console.log(`App is running on ${PORT}`);
});
