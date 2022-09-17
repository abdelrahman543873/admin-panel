//Install express server
const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');

// Serve only the static files form the dist directory
app.use(cors());
app.use(express.static(__dirname + '/dist/frontend'));
app.get('/frontend/health', function (req, res) {
  res.json('OK');
});
app.get('/frontend/*', function (req, res) {
  res.sendFile(path.join(__dirname + '/dist/frontend/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(80, '0.0.0.0', () => {
  console.log('app served');
});