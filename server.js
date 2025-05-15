const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();

const app = express();

// CORS middleware
app.use(cors({
  origin: ["https://cari-stok-takip.netlify.app"],
  credentials: true
}));

app.use(morgan("dev"))

// Body parser middleware
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Define routes
app.use('/api/cariler', require('./routers/cariRoutes'));
app.use('/api/cariFatura', require('./routers/cariFaturaRoutes'));
app.use('/api/gelirler', require('./routers/gelirRoutes'));
app.use('/api/giderler', require('./routers/giderRoutes'));
app.use('/api/stock', require('./routers/stockRoutes'));

// Server
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
