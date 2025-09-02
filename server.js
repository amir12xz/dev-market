require('dotenv').config();

const app = require('./app');
const mongoose = require('mongoose');

async function start() {
  try {
    await mongoose.connect('mongodb://localhost:27017/dore');
    console.log('mongo connected');

    const port = process.env.PORT || 3000;
    app.listen(port, () => {
      console.log('server run on');
    });
  } catch (err) {
    console.error('Failed to start app:', err);
    process.exit(1);
  }
}
start();
