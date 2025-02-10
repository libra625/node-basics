const express = require('express');
const mongoose = require("mongoose");
const config = require("./config/config");
const authRoutes = require('./routes/authRoutes');
const postsRoutes = require('./routes/postsRoutes');
const commentsRoutes = require('./routes/commentsRoutes');

const app = express();

// Middleware для парсингу JSON
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/posts', postsRoutes);
app.use('/api/comments', commentsRoutes);

// Підключення до MongoDB
mongoose.connect(config.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
    console.log('Підключено до MongoDB');
    // Запуск сервера після успішного підключення до БД
    app.listen(config.port, () => {
        console.log(`Сервер запущено на порті ${config.port}`);
    });
})
.catch(err => {
    console.error('Помилка підключення до MongoDB', err);
});
