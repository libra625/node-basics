require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const productsRoutes = require('./routes/productRoutes');

const app = express();
app.use(express.json());
app.use(cors());

// Підключення до бази
connectDB();

// Роутинг
app.use('/api/products', productsRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
