import express from 'express';

const app = express();

function logger(req, res, next) {
    console.log("Hello form logger");
    next();
}

function helloWorld(req, res, next) {
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Hello World</h1>');
};

function goodbyeWorldWorld(req, res, next) {
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Goodbye World</h1>');
}

app.get('/hello', logger, helloWorld);
app.get('/goodbye', logger, goodbyeWorldWorld);

app.listen(3000);

console.log('Server running at http://localhost:3000/');