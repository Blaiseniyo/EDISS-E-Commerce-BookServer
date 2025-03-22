/*
services.ts
description: This file contains the services to handle business logic for the books
author: Blaise Niyonkuru<blaiseniyonkuru12@gmail.com>
*/

import Book from "../../database/models/book";
import { CreateBookInput, UpdateBookInput, GetBookInput } from './type';
import { ResourceAlreadyExistsError, NotFoundError, BadRequestError } from "../../utils/errors";

export class BookService {

    // Add a new book
    async createBook(input: CreateBookInput['body']): Promise<Book> {
        try {

            // Check if book with given ISBN already exists
            const existingBook = await this.getBookByISBN(input.ISBN);

            if (existingBook) {
                throw new ResourceAlreadyExistsError("This ISBN already exists in the system.");
            }

            // Create new book
            const book = await Book.create(input);

            return book;
        } catch (error) {
            throw error;
        }
    }

    // Update an existing book
    async updateBook(params: UpdateBookInput['params'], body: UpdateBookInput['body']): Promise<Book> {
        try {

            if (params.ISBN !== body.ISBN) {
                throw new NotFoundError("ISBN in params does not match ISBN in body");
            }
            // Check if book exists
            const existingBook = await this.getBookByISBN(params.ISBN);

            if (!existingBook) {
                throw new NotFoundError("Book not found");
            }

            // Update book
            await Book.update(body, {
                where: {
                    ISBN: params.ISBN
                }
            });

            // Fetch the updated book
            const updatedBook = await this.getBookByISBN(params.ISBN);

            if (!updatedBook) {
                throw new NotFoundError("Book not found after update");
            }

            return updatedBook;
        } catch (error) {
            throw error;
        }
    }

    // Get a book by ISBN
    async getBookByISBN(ISBN: string): Promise<Book | null> {

        try {

            const book = await Book.findByPk(ISBN, {
                attributes: { exclude: ['createdAt', 'updatedAt'] }
            });

            return book;

        } catch (error) {
            throw error;
        }
    }
}

export default new BookService();