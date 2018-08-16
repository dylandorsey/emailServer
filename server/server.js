// Require node packages
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

require('dotenv').config();

// if (process.env.NODE_ENV !== "production") {
//     require('dotenv').load();
// }

// Use body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Require routes
const contactRouter = require('./routes/contactRouter');

// Set port
const PORT = process.env.PORT || 5000;

// // Serve static files
// app.use(express.static('./public'));


// Use routes
app.use('/handleContact', contactRouter);

// Listen on port
app.listen(PORT, () => {
    console.log(`Running on port: ${PORT}`);
});