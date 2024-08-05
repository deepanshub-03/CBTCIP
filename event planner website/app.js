const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Set up EJS view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware to parse JSON and URL-encoded bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Route to render the home page
app.get('/', (req, res) => {
  res.render('home'); // Note: You can omit the .ejs extension
});
app.get('/featured', (req, res) => {
  res.render('featuredEvents'); // Note: You can omit the .ejs extension
});
app.get('/upcoming', (req, res) => {
  res.render('upcoming'); // Note: You can omit the .ejs extension
});
app.get('/contact', (req, res) => {
  res.render('contact'); // Note: You can omit the .ejs extension
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
