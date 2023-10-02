import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import morgan from 'morgan'
import router from "./routes/blogRoute.js";
dotenv.config()

const app = express();

app.use(express.json())
app.use(cors())
app.use(morgan('dev'))

app.listen(5000, ()=>{
    console.log("Server up and running on PORT : 5000")
})


app.use('/',router)