const express = require('express');
const app = express()

app.listen(2000);

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index', { title: 'Home' });
  });

app.get('/about', (req, res) => {
    res.render('about', { title: 'About' });
  });

app.get('/skills', (req,res) => {
    res.render('skills',{title : 'skills'});

});

app.get('/projects', (req,res) => {
    res.render('projects',{title : 'projects'});

});

app.get('/contact', (req,res) => {
    res.render('contact',{title : 'contact'});

});

app.use((req, res) => {
    res.status(404).render('404', { title: '404' });
  })



