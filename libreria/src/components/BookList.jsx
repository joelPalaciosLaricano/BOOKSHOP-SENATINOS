import React from "react";

function BookList({ books, onEdit, onDelete }) {
  return (
    <ul className="books-list">
      {books.map((book) => (
        <li key={book.id} className="book-item">
          <div className="book-details">
            <p>ID: {book.id}</p>
            <h3>{book.title}</h3>
            <p>Autor: {book.author}</p>
            <p>Año: {book.publication_year}</p>
            <p>Género: {book.genre}</p>
          </div>
          <div className="book-actions">
            <button onClick={() => onEdit(book)}>✏️ Editar</button>
            <button onClick={() => onDelete(book.id)}>🗑️ Eliminar</button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default BookList;
