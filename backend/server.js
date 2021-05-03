const express = require('express');
const bodyParser = require('body-parser');
// const cookieParser = require('cookie-parser');
const taskRoutes = require('./routes/taskRoutes');
require('dotenv').config({path: './config/.env'});
require('./config/db');
const cors = require('cors');

const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
// app.use(cookieParser());
const corsOptions = {
  origin: process.env.CLIENT_URL,
  credentials: true,
  'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
}

app.use(cors(corsOptions));


// routes
app.use('/api/task', taskRoutes);

// server
app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
})