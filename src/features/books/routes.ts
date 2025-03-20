/*
routes.ts
description: This file contains the routes for the books
author: Blaise Niyonkuru<blaiseniyonkuru12@gmail.com>
*/

import express from "express";
import bookController from "./controllers";
import validateResource from "../../shared/middleware/validator";
import { createBookSchema, updateBookSchema, getBookSchema } from "./type";

const routes = express.Router();

// POST /books - Add a new book
routes.post(
  "/",
  validateResource(createBookSchema),
  bookController.createBook
);

// PUT /books/:ISBN - Update a book
routes.put(
  "/:ISBN",
  validateResource(updateBookSchema),
  bookController.updateBook
);

// GET /books/:ISBN - Get a book by ISBN
routes.get(
  "/:ISBN",
  validateResource(getBookSchema),
  bookController.getBook
);

// GET /books/isbn/:ISBN - Alternative endpoint for getting a book by ISBN
routes.get(
  "/isbn/:ISBN",
  validateResource(getBookSchema),
  bookController.getBook
);

export default routes;