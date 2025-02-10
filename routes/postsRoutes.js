const express = require('express');
const router = express.Router();
const postsController = require('../controllers/postsController');
const authMiddleware = require('../middlewares/authMiddleware');

// Усі маршрути нижче захищені – доступ лише для авторизованих користувачів
router.use(authMiddleware);

// Отримання всіх постів користувача
router.get('/', postsController.getPosts);

// Отримання конкретного посту за id
router.get('/:id', postsController.getPostById);

// Створення нового посту
router.post('/', postsController.createPost);

// Оновлення посту за id
router.put('/:id', postsController.updatePost);

// Видалення посту за id
router.delete('/:id', postsController.deletePost);

module.exports = router;
