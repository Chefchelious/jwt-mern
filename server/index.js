require('dotenv').config();

const express = require('express'),
  cors = require('cors'),
  cookieParser = require('cookie-parser'),
  mongoose = require('mongoose'),
  router = require('./routes/index');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use('/api', router);

const start = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    app.listen(PORT, () => console.log(`Port is ruinning on ${PORT} port`));
  } catch (e) {
    console.log(e);
  }
};

void start();
