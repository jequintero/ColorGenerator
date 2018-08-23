'use strict';

// [START gae_node_request_example]
const express = require('express');
var cors = require('cors')

const app = express();

app.use(cors());

app.get('/', cors(), (req, res) => {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  res.json({ color: color});
});

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});
// [END gae_node_request_example]
