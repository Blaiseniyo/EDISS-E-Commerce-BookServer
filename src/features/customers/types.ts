/*
 types.ts
 description: This file contains the types for the customers
 author: Blaise Niyonkuru<blaiseniyonkuru12@gmail.com>
*/

import { z } from 'zod';


export const createCustomerSchema = z.object({
    body: z.object({
        userId: z.string().email("User ID must be a valid email address"),
        name: z.string().min(1, "Name is required"),
        phone: z.string().min(1, "Phone is required"),
        address: z.string().min(1, "Address is required"),
        address2: z.string().optional(),
        city: z.string().min(1, "City is required"),
        state: z.string().length(2, {
            message: "State must be a valid 2-letter US state abbreviation"
        }),
        zipcode: z.string().min(1, "Zipcode is required")
    })
});

export const getCustomerByIdSchema = z.object({
    params: z.object({
        id: z.string().min(1, "Customer ID is required").refine(val => !isNaN(Number(val)), {
            message: "Customer ID must be a number"
        })
    })
});

export const getCustomerByUserIdSchema = z.object({
    query: z.object({
        userId: z.string().email("User ID must be a valid email address")
    })
});

// Infer types from schemas
export type CreateCustomerInput = z.infer<typeof createCustomerSchema>;
export type GetCustomerByIdInput = z.infer<typeof getCustomerByIdSchema>;
export type GetCustomerByUserIdInput = z.infer<typeof getCustomerByUserIdSchema>;
