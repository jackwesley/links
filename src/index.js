const express = require('express');
const { json } = require('express');

const app = express();


app.get('/', (req, res) => {
    return res.json('Api running...');
});

app.listen(3001, () => {
    console.log('listening on port 3001');
});