import data from './data.js';

const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const port = process.env.PORT || 8000;

//middlewire
app.use(cors());
app.use(express.json());

app.get('/api/products', (req, res) => {
  res.send(data.products);
});

app.listen(port, () => {
  console.log('running');
});
