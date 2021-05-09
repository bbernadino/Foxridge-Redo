const express = require('express');
const path = require('path');
const app = express();
const port = 4000;

app.use(express.static('dist'));

app.get('*', (req, res) => {
  const index = path.join(__dirname, '/', '../dist', 'index.html' );
  res.sendFile(index);
})

app.listen(port, () => {
  console.log(`🚀 http://localhost:${port}`);
});
