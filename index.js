const express = require('express');
const app = express();
const path = require('path');

const PORT = process.env.PORT || 3000;

// Set the views directory for rendering HTML files
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);

// Serve static files like CSS, JS, and images from a 'public' folder (optional but recommended)
app.use(express.static(path.join(__dirname, 'public')));

// Define routes for each HTML file
app.get('/', (req, res) => {
    res.render('index.html');
});

app.get('/details.html', (req, res) => {
    res.render('details.html');
});

app.get('/protector.html', (req, res) => {
    res.render('protector.html');
});

app.get('/request_page.html', (req, res) => {
    res.render('request_page.html');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
