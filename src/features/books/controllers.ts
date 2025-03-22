/*
controllers.ts
description: This file contains the controllers for the books
author: Blaise Niyonkuru<blaiseniyonkuru12@gmail.com>
*/

import { Request, Response, NextFunction } from 'express';
import { CreateBookInput, UpdateBookInput, GetBookInput } from './type';
import bookService from './services';
import { NotFoundError } from "../../utils/errors"

export class BookController {

    // Add a new book
    async createBook(req: Request<
        Record<string, never>,
        Record<string, never>,
        CreateBookInput['body']>,
        res: Response,
        next: NextFunction
    ): Promise<void> {
        try {
            const book = await bookService.createBook(req.body);

            res.status(201).json(req.body);

        } catch (error: any) {
            next(error);
        }
    }

    // Update an existing book
    async updateBook(
        req: Request<UpdateBookInput['params'], Record<string, never>, UpdateBookInput['body']>,
        res: Response,
        next: NextFunction
    ) {
        try {
            const updatedBook = await bookService.updateBook(req.params, req.body);
            res.status(200).json(updatedBook);
        } catch (error: any) {
            next(error);
        }
    }

    // Get a book by ISBN
    async getBook(req: Request<GetBookInput['params']>, res: Response, next: NextFunction) {
        try {

            const book = await bookService.getBookByISBN(req.params.ISBN);

            if (!book) {
                throw new NotFoundError("Book not found");
            }

            res.status(200).json(book);
        } catch (error) {
            next(error);
        }
    }
}

export default new BookController();