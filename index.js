const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const authRoutes = require('./routes/auth');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/auth', authRoutes);

mongoose.connect('mongodb://localhost:27017/authCrud')
    .then( () => {
        console.log("Database connected");
    })
    .catch( (error) => {
        console.log(error);
    });

app.listen(6000, () => {
    console.log("Server is running at port 4000");
});