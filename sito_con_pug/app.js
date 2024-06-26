app.get('/', function (req, res) {
    res.render('index', {
     title: 'Homepage',
     content : 'Questa pagina parla del mondo e di tanto altro'
   });
  });
const express = require('express');
const people = require('./people.json'); 
const app = express();

app.set('view engine', 'pug');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.render('index', {
    title: 'Homepage',
    people: people.profiles 
  });
});

app.listen(3000, function () {
 console.log('Example app listening on port 3000!');
});

app.get('/profile', (req, res) => {
  const person = people.profiles.find((p) => p.id === req.query.id);
  res.render('profile', {
    title: `About ${person.firstname} ${person.lastname}`,
    person,
  });
});

