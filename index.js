const express = require('express');
const app = express();

//set view engine as ejs
app.set("view engine", "ejs");

//specify folder for static images
app.use(express.static("public"));

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(3000, "127.0.0.1", () => {
  console.log('server started');
});