import {
  addBookHandler,
  deleteBookByIdHandler,
  getAllBookHandler,
  getBookByIdHandler,
  updateBookByIdHandler,
} from "./handler.js";

export const routes = [
  // Create Book
  {
    method: "POST",
    path: "/books",
    handler: addBookHandler,
  },
  {
    method: "GET",
    path: "/books",
    handler: getAllBookHandler,
  },
  {
    method: "GET",
    path: "/books/{bookId}",
    handler: getBookByIdHandler,
  },
  {
    method: "PUT",
    path: "/books/{bookId}",
    handler: updateBookByIdHandler,
  },
  {
    method: "DELETE",
    path: "/books/{bookId}",
    handler: deleteBookByIdHandler,
  },
];
