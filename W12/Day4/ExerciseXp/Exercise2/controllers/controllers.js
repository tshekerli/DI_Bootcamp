const models = require('../models/models');

const getAllBooks = (req, res) => {
    models.getAllBooks().then((data) => {
        res.status(200).json(data);
    }).catch((err) => {
        res.status(500).json(err);
    });
}

const getBookById = (req, res) => {
    models.getBookById(req.params.id).then((data) => {
        res.status(200).json(data);
    }).catch((err) => {
        res.status(500).json(err);
    });
}

const createBook = (req, res) => {
    models.createBook(req.body).then((data) => {
        res.status(200).json(data);
    }).catch((err) => {
        res.status(500).json(err);
    });
}


const updateBook = (req, res) => {
    models.updateBook(req.params.id, req.body).then((data) => {
        res.status(200).json(data);
    }).catch((err) => {
        res.status(500).json(err);
    });
}

const deleteBook = (req, res) => {
    models.deleteBook(req.params.id).then((data) => {
        res.status(200).json(data);
    }).catch((err) => {
        res.status(500).json(err);
    });
}

module.exports = {
    getAllBooks,
    getBookById,
    createBook,
    updateBook,
    deleteBook
};  