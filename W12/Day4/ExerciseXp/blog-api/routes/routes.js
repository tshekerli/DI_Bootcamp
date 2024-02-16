const express = require('express');
const router = express.Router();
const controllers = require('../controllers/controllers');
router.use(express.json());

router.get('/posts', controllers.getAllPosts);
router.get('/posts/:id', controllers.getPostById);
router.post('/posts', controllers.createPost);
router.put('/posts/:id', controllers.updatePost);
router.delete('/posts/:id', controllers.deletePost);


module.exports = router;