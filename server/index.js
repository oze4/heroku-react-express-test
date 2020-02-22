const express = require('express');
const path = require('path');
const faker = require('faker');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, '../client/build')));

app.get('/api/faker', (req, res) => {
    res.status(200).send(faker.helpers.createCard());
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

app.listen(process.env.PORT || 3003, () => { 
    console.log("Server started");
});
