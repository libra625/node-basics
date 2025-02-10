const Comment = require('../models/Comment');
const Post = require('../models/Post');

exports.createComment = async (req, res) => {
    try {
        const { content } = req.body;
        const postId = req.params.id
        if ( !content) {
            return res.status(400).json({ message: 'Вкажіть ID поста та контент Коменту' });
        }

        const post = await Post.findById(postId);
        if (!post) {
            return res.status(404).json({ message: 'Комент не знайдено' });
        }

        const comment = new Comment({ content, owner: req.userId , post: postId });
        await comment.save();
        return res.status(201).json(comment);
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: 'Помилка сервера' });
    }
};

exports.getCommentsByPost = async (req, res) => {
    try {
        const comments = await Comment.find({ post: req.params.id  });
        return res.status(200).json(comments);
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: 'Помилка сервера' });
    }
};

exports.updateCommentById = async (req, res) => {
    try {
        const { content } = req.body;
        const comment = await Comment.findOneAndUpdate(
            { _id: req.params.id, owner: req.userId },
            { content },
            { new: true }
        );
        if (!comment) {
            return res.status(404).json({ message: 'Комент не знайдено' });
        }
        return res.status(200).json(comment);
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: 'Комент сервера' });
    }
};

exports.deleteCommentById = async (req, res) => {
    try {
        const comment = await Comment.findOneAndDelete({ _id: req.params.id, owner: req.userId });
        if (!comment) {
            return res.status(404).json({ message: 'Комент не знайдено' });
        }
        return res.status(200).json({ message: 'Комент успішно видалено' });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: 'Комент сервера' });
    }
};
