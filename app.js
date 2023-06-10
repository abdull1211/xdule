'use strict'

const express = require('express')

const PORT = 8000
const HOST = '0.0.0.0'

const app = express();

app.get('/', (req, res) => {
  const currentTime = new Date().toLocaleTimeString('id-ID', { timeZone: 'Asia/Jakarta' });
  let greeting = '';

  if (currentTime < '12:00') {
    greeting = 'Good morning!';
  } else if (currentTime < '18:00') {
    greeting = 'Good afternoon!';
  } else {
    greeting = 'Good evening!';
  }

  res.send(`${greeting} Waktu saat ini adalah ${currentTime} ~xdule`);
});

app.listen(PORT, HOST)
console.log(`Running on http://${HOST}:${PORT}`)



