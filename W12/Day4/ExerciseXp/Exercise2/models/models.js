const { db }  = require('../config/config');

//Create  books table

// db.schema.createTable('books', (table) => {
//     table.increments('id').primary();
//     table.string('title');
//     table.string('author');
//     table.integer('year_published');
//     table.timestamps();
// }).then(() => {
//     console.log('Table created');
// }).catch((err) => {
//     console.log(err);
// });

//Insert data into books table

// data = [{title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year_published: 1925}, {title: 'To Kill a Mockingbird', author: 'Harper Lee', year_published: 1960}, {title: '1984', author: 'George Orwell', year_published: 1949}, {title: 'The Catcher in the Rye', author: 'J.D. Salinger', year_published: 1951}, {title: 'The Grapes of Wrath', author: 'John Steinbeck', year_published: 1939}, {title: 'Brave New World', author: 'Aldous Huxley', year_published: 1932}]

// db('books').insert(data).then(() => {
//     console.log('Data inserted');
// }).catch((err) => { 
//     console.log(err);
// });

//Select data from books table

const getAllBooks = () => {
    return db.select().from('books');
}

//I want to get the book by id and if the id does not exist I want to send a response saying book not found with error 404 message


const getBookById = (id) => {
    return db.select().from('books').where('id', id).then((data) => {
        if (data.length === 0) {
            return Promise.reject({ status: 404, message: 'Book not found' });
        } else {
            return data;
        }
    });
}


const createBook = (book) => {

    return db('books').insert(book).then(() => {
        console.log('Data inserted');
    }).catch((err) => { 
        console.log(err);
    });
}

const updateBook = (id, book) => {
    return db('books').where('id', id).update(book).then(() => {
        console.log('Data updated');
    }).catch((err) => { 
        console.log(err);
    });
}

const deleteBook = (id) => {
    return db('books').where('id', id).del().then(() => {
        console.log('Data deleted');
    }).catch((err) => { 
        console.log(err);
    });
}

module.exports = { getAllBooks, getBookById, createBook, updateBook, deleteBook };