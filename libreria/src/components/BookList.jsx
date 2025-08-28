import React from "react";

function BookList({ books, onEdit, onDelete }) {
  return (
    <table className="books-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>NOMBRE</th>
          <th>AUTOR</th>
          <th>AÑO</th>
          <th>ACCIONES</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book) => (
          <tr key={book.id}>
            <td>{book.id}</td>
            <td>{book.title}</td>
            <td>{book.author}</td>
            <td>{book.publication_year}</td>
            <td>
              <button onClick={() => onEdit(book)}>✏️ Editar</button>
              <button onClick={() => onDelete(book.id)}>🗑️ Eliminar</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default BookList;
