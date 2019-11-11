const express = require('express');
const mongoose = require('mongoose');
const app = express();


// Database
mongoose.connect('mongodb://127.0.0.1:27017/user-manager', { useNewUrlParser: true })
  .then(() => console.log('Connected to Database'))
  .catch(err => console.log(err));


// Middleware
app.use(express.urlencoded({ extended: true })); // for form/url data
app.use(express.json());

// Controllers
const UserControl = require('./controllers/UserControl');



// Routes - Define the routes but the controllers will set how they work
app.post('api/user/create', UserControl.create); // outer route properties: (app.get, app.post, app.set, app.put, app-delete, etc.)



// Start Server
app.listen(3000, () => (console.log("connected to server on port 3000")));

