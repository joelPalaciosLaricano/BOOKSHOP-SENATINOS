import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8000/api/",
});

export const getBooks = () => API.get("books/");
export const createBook = (book) => API.post("books/", book);
export const updateBook = (id, book) => API.put(`books/${id}/`, book);
export const deleteBook = (id) => API.delete(`books/${id}/`);
