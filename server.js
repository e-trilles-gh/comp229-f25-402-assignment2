import express from 'express';
import morgan from 'morgan';
import mongoose from "mongoose";
import dotenv from 'dotenv/config';

// uses the routes
import homeRoutes from './server/routes/homeRoutes.js';
import projectRoutes from './server/routes/project.js';

const app = express();

mongoose.connect(process.env.MONGODB_URI);

const connection = mongoose.connection;
connection.on('error', console.error.bind(console, "MongoDB connection error: "));
connection.once('open', () => { console.log('Connected to MongoDB'); });


app.use(morgan('dev'));

app.use('/', homeRoutes);
app.use('/projects', projectRoutes);

app.listen(3000);

console.log('Established connection. Server running at http://localhost:3000/');



// nodemon --exec "npm start"