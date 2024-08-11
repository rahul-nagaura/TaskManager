import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import {dbconnect} from './dbconnect/dbconnect.js';
import TaskRouter from './routes/routes.js';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;
dbconnect();

app.use(cors());
app.use(express.json());

app.use('/tasks', TaskRouter);
app.get("/", (req,res) => {
    res.send("This is home page babay");
})

app.listen(PORT, () => {
    console.log("Server Started at PORT:",PORT);
})