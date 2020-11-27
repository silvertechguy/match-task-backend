require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const matchRoutes = require('./routes/matchRoutes');
const connectDB = require('./config/db');

const main = async () => {
  connectDB();

  const app = express();

  app.use(express.json());
  app.set('trust proxy', 1);
  app.use(cors({ credentials: true }));
  app.use(morgan('dev'));

  app.use('/api/matches', matchRoutes);

  app.get('/', (_, res) => {
    res.send('API is running....');
  });

  const PORT = parseInt(process.env.PORT) || 4000;
  app.listen(PORT, () => {
    console.log(
      `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`
    );
  });
};

main().catch(err => {
  console.error(err);
});
