const User = require('../models/User');
const jwt = require('jsonwebtoken');
const config = require('../config/config');

exports.register = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        if (!username || !email || !password) {
            return res.status(400).json({ message: 'Вкажіть ім’я користувача, email та пароль' });
        }
        // Перевірка чи існує користувач з таким email або username
        const existingUser = await User.findOne({ $or: [{ email }, { username }] });
        if (existingUser) {
            return res.status(400).json({ message: 'Користувач з такими даними вже існує' });
        }
        const user = new User({ username, email, password });
        await user.save();

        // Генерація JWT токену
        const token = jwt.sign({ id: user._id }, config.jwtSecret, { expiresIn: '1h' });
        return res.status(201).json({ token, user: { id: user._id, username, email } });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: 'Помилка сервера' });
    }
};

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ message: 'Вкажіть email та пароль' });
        }
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'Невірні дані для входу' });
        }
        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Невірні дані для входу' });
        }

        const token = jwt.sign({ id: user._id }, config.jwtSecret, { expiresIn: '1h' });
        return res.status(200).json({ token, user: { id: user._id, username: user.username, email: user.email } });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: 'Помилка сервера' });
    }
};
