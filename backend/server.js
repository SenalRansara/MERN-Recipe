const express = require('express');
const mongoose = require('mongoose');
require ("dotenv").config();

const app = express();
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

const PORT = 8000;
const URL = process.env.MONGODB_URL;

const Routes = require("./controller/recipeController");
app.use("/api", Routes);

mongoose.connect(URL).then(()=> {
    console.log('DB Connected Successfully');
})
.catch((err) => console.log('DB Connection Error',err));

app.listen(PORT,()=>{
    console.log(`App is running on ${PORT}`);
});
