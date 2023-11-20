// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Parse application/json
app.use(bodyParser.json());

// Import routes
const comments = require('./routes/comments');

// Use routes
app.use('/comments', comments);

// Start server
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});