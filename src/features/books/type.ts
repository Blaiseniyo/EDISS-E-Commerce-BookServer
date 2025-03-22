/*
 types.ts
 description: This file contains the types for the books
 author: Blaise Niyonkuru<blaiseniyonkuru12@gmail.com>
*/

import { z } from 'zod';

export const createBookSchema = z.object({
    body: z.object({
        ISBN: z.string().min(1, "ISBN is required"),
        title: z.string().min(1, "Title is required"),
        Author: z.string().min(1, "Author is required"),
        description: z.string().min(1, "Description is required"),
        genre: z.string().min(1, "Genre is required"),
        price: z.number().positive("Price must be a positive number").refine(value => /^\d+(\.\d{1,2})?$/.test(value.toString()), {
            message: "Price must have at most 2 decimal places"
        }),
        quantity: z.number().int().nonnegative("Quantity must be a non-negative integer")
    })
});

export const updateBookSchema = z.object({
    params: z.object({
        ISBN: z.string().min(1, "ISBN is required")
    }),
    body: z.object({
        ISBN: z.string().min(1, "ISBN is required"),
        title: z.string().min(1, "Title is required"),
        Author: z.string().min(1, "Author is required"),
        description: z.string().min(1, "Description is required"),
        genre: z.string().min(1, "Genre is required"),
        price: z.number().positive("Price must be a positive number").refine(value => /^\d+(\.\d{1,2})?$/.test(value.toString()), {
            message: "Price must have at most 2 decimal places"
        }),
        quantity: z.number().int().nonnegative("Quantity must be a non-negative integer")
    })
});

export const getBookSchema = z.object({
  params: z.object({
    ISBN: z.string().min(1, "ISBN is required")
  })
});

// Infer types from schemas
export type CreateBookInput = z.infer<typeof createBookSchema>;
export type UpdateBookInput = z.infer<typeof updateBookSchema>;
export type GetBookInput = z.infer<typeof getBookSchema>;