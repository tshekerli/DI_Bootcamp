const models = require('../models/models');


const getAllPosts = (req, res) => {
    models.getAllPosts()
    .then((data) => res.status(200).json(data))
    .catch((err) => res.status(500).json(err));
}

const getPostById = (req, res) => {
    models.getPostById(req.params.id)
    .then((data) => res.status(200).json(data))
    .catch((err) => res.status(500).json(err));
}

const createPost = (req, res) => {
    models.createPost(req.body)
    .then((data) => res.status(201).json(data))
    .catch((err) => res.status(500).json(err));
}

const updatePost = (req, res) => {
    models.updatePost(req.params.id, req.body)
    .then((data) => res.status(200).json(data))
    .catch((err) => res.status(500).json(err));
}

const deletePost = (req, res) => {
    models.deletePost(req.params.id)
    .then((data) => res.status(200).json(data))
    .catch((err) => res.status(500).json(err));
}




module.exports = { getAllPosts, getPostById, createPost, updatePost, deletePost };