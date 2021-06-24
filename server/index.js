const path = require("path");
const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();
module.exports = app;

app.use(express.static(path.resolve(__dirname, '../client/build')));

// api routes
app.use('/api', require('./api'));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.use((err, req, res, next) => {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || "Internal server error.");
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

