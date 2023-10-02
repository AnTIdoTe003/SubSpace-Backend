const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const morgan = require('morgan');
const router = require('./routes/blogRoute.js');
dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

app.listen(5000, () => {
    console.log("Server up and running on PORT : 5000");
});

app.use('/', router);
