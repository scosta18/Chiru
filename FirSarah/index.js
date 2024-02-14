const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 5000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Set up route for serving the red.ejs file
app.get('/red', (req, res) => {
    window.alert("ball")
    res.render('red.ejs');// Render the red.ejs template
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
