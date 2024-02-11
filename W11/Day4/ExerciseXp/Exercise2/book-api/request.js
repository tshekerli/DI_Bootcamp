// Fetch all books
fetch('http://localhost:5000/api/books')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch((error) => console.error('Error:', error));

// Fetch a specific book by ID
fetch('http://localhost:5000/api/books/1')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch((error) => console.error('Error:', error));

// Create a new book
fetch('http://localhost:5000/api/books', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        title: 'New Book',
        author: 'New Author',
        publishedYear: 2022
    }),
})
.then(response => response.json())
.then(data => console.log(data))
.catch((error) => console.error('Error:', error));