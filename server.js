import express from 'express';
import morgan from 'morgan';
import mongoose from "mongoose";
import dotenv from 'dotenv/config';

mongoose.connect(process.env.MONGODB_URI);
const connection = mongoose.connection;
connection.on('error', console.error.bind(console, "MongoDB connection error: "));
connection.once('open', () => { console.log('Connected to MongoDB'); });


// uses the routes
import projectRoutes from './server/routes/project.js';

const app = express();



app.use(morgan('dev'));
app.use(express.json());

app.use('/projects', projectRoutes);

app.listen(3000);

console.log('Established connection. Server running at http://localhost:3000/');



// nodemon --exec "npm start"