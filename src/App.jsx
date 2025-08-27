import React, { useState, useEffect } from "react";
import axios from "axios";
import BookForm from "./components/BookForm";
import BookList from "./components/BookList";
import "./App.css";

const API_URL = "http://localhost:8000/api/books/";

function App() {
  const [books, setBooks] = useState([]);
  const [currentBook, setCurrentBook] = useState(null);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await axios.get(API_URL);
      setBooks(response.data);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  const handleSave = async (book) => {
    try {
      if (book.id) {
        await axios.put(`${API_URL}${book.id}/`, book);
      } else {
        await axios.post(API_URL, book);
      }
      setCurrentBook(null);
      fetchBooks();
    } catch (error) {
      console.error("Error saving book:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_URL}${id}/`);
      fetchBooks();
    } catch (error) {
      console.error("Error deleting book:", error);
    }
  };

  const handleEdit = (book) => {
    setCurrentBook(book);
  };

  const handleCancel = () => {
    setCurrentBook(null);
  };

  return (
    <div className="app-container">
      <header>
        <h1>Gestión de Librería 📚</h1>
      </header>
      <section className="form-section">
        <h2>{currentBook ? "Editar Libro" : "Añadir Nuevo Libro"}</h2>
        <BookForm
          currentBook={
            currentBook || { title: "", author: "", publication_year: "" }
          }
          onSave={handleSave}
          onCancel={handleCancel}
        />
      </section>
      <section className="books-list-section">
        <h2>Lista de Libros</h2>
        <BookList books={books} onEdit={handleEdit} onDelete={handleDelete} />
      </section>
    </div>
  );
}

export default App;
