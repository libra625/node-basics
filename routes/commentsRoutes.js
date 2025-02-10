const express = require('express');
const router = express.Router();
const commentsController = require('../controllers/commentsController');
const authMiddleware = require('../middlewares/authMiddleware');

router.use(authMiddleware)

router.post('/:id', commentsController.createComment);
router.get('/:id', commentsController.getCommentsByPost);
router.put('/:id', commentsController.updateCommentById);
router.delete('/:id', commentsController.deleteCommentById);

module.exports = router;
