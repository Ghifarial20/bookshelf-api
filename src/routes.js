const {
    addBook,
    allBooks,
    bookById,
    editBook,
    deleteBook,
  } = require('./handler');
  
  const routes = [
    {
      method: 'POST',
      path: '/books',
      handler: addBook,
    },
    {
      method: 'GET',
      path: '/books',
      handler: allBooks,
    },
    {
      method: 'GET',
      path: '/books/{id}',
      handler: bookById,
    },
    {
      method: 'PUT',
      path: '/books/{id}',
      handler: editBook,
    },
    {
      method: 'DELETE',
      path: '/books/{id}',
      handler: deleteBook,
    },
  ];
  
  module.exports = routes;