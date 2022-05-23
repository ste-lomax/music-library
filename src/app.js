const express = require('express');

const app = express();

app.use(express.json());

// app.get('/', (req, res) => {
//   res.status(200).json({ result: `Hello, world!` });
// });

const artistRouter = require('./routes/artist');

app.use('/artist', artistRouter);

module.exports = app;