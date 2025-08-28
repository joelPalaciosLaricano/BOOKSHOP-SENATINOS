import React, { useState, useEffect } from "react";

function BookForm({ currentBook, onSave, onCancel }) {
  const [book, setBook] = useState(currentBook);

  useEffect(() => {
    setBook(currentBook);
  }, [currentBook]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook({ ...book, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(book);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Título del libro"
        value={book.title || ""}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="author"
        placeholder="Autor del libro"
        value={book.author || ""}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="publication_year"
        placeholder="Año de publicación"
        value={book.publication_year || ""}
        onChange={handleChange}
        required
      />
      <button type="submit">{book.id ? "Actualizar" : "Registrar"}</button>
      {book.id && (
        <button type="button" onClick={onCancel}>
          Cancelar
        </button>
      )}
    </form>
  );
}

export default BookForm;