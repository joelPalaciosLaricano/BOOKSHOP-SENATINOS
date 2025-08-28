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
    // Convertir publication_year a número
    onSave({
      ...book,
      publication_year: parseInt(book.publication_year) || 0
    });
  };

  const genreOptions = [
    { value: "ficcion", label: "Ficción" },
    { value: "no_ficcion", label: "No Ficción" },
    { value: "fantasia", label: "Fantasía" },
    { value: "ciencia_ficcion", label: "Ciencia Ficción" },
    { value: "misterio", label: "Misterio" },
    { value: "biografia", label: "Biografía" },
    { value: "poesia", label: "Poesía" },
    { value: "romance", label: "Romance" },
    { value: "terror", label: "Terror" },
    { value: "otro", label: "Otro" }
  ];

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
        min="1000"
        max="2030"
        required
      />
      <select
        name="genre"
        value={book.genre || ""}
        onChange={handleChange}
        required
      >
        <option value="">Seleccionar género</option>
        {genreOptions.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
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