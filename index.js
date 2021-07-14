const express = require('express');
const faker = require('faker');

const app = express();

//set view engine as ejs
app.set("view engine", "ejs");

//specify folder for static images
app.use(express.static("public"));

app.get('/', (req, res) => {
  res.render('index',{"title":"Overview"});
});
app.get('/about', (req, res) => {
  res.render('about',{"title":"About"});
});
app.get('/contact', (req, res) => {
  res.render('contact',{"title":"Contact"});
});
app.get('/economic-impact', (req, res) => {
  res.render('economic-impact',{"title":"Economic Impact"});
});
app.get('/environmental-impact', (req, res) => {
  res.render('environmental-impact',{"title":"Environmental Impact"});
});
app.get('/future', (req, res) => {
  res.render('future',{"title":"Future"});
});
app.get('/sources', (req, res) => {
  res.render('sources',{"title":"Sources"});
});

app.listen(3000, "127.0.0.1", () => {
  console.log('server started');
});