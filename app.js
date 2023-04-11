// app.js

const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');

// routes
const books = require('./routes/api/books');
const app = express();

// Connect Database
connectDB()

// cors
app.use(cors({ origin: true, credentials: true }));


require('dotenv').config()

// Init Middleware
app.use(express.json({ extended: false }));

app.get('/',(req, res) => res.status(200).json({ message: 'Hello World!',
advertisement: 'Submitted and coded by Jagadeesh Kumar . S, you may send mail to my email address which is jagadeesh_2k17@proton.me and you may contribute some money to my Indian Unified Payment Interface (UPI) which is jagadeesh-kumar@ybl .' 
})
)

// use Routes
app.use('/api/books', books);


const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));

