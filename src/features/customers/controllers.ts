/*
controllers.ts
description: This file contains the controllers for the customers
author: Blaise Niyonkuru<blaiseniyonkuru12@gmail.com>
*/

import { Request, Response, NextFunction } from 'express';
import { CreateCustomerInput, GetCustomerByIdInput, GetCustomerByUserIdInput } from './types';
import customerService from './services';
import { NotFoundError } from "../../utils/errors";

export class CustomerController {
  // Add a new customer
  async createCustomer(req: Request<
    Record<string, never>,
    Record<string, never>,
    CreateCustomerInput['body']>,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const customer = await customerService.createCustomer(req.body);
      
      res.status(201)
        .json({"id":customer.id, ...req.body});
    } catch (error: any) {
      next(error);
    }
  }

  // Get a customer by ID
  async getCustomerById(
    req: Request<GetCustomerByIdInput['params']>,
    res: Response,
    next: NextFunction
  ) {
    try {
      const customerId = Number(req.params.id);
      const customer = await customerService.getCustomerById(customerId);

      if (!customer) {
        throw new NotFoundError("Customer not found");
      }

      res.status(200).json(customer);
    } catch (error) {
      next(error);
    }
  }

  // Get a customer by user ID (email)
  async getCustomerByUserId(
    req: Request<{}, {}, {}, GetCustomerByUserIdInput['query']>,
    res: Response,
    next: NextFunction
  ) {
    try {
      const userId = req.query.userId;
      const customer = await customerService.getCustomerByUserId(userId);

      if (!customer) {
        throw new NotFoundError("Customer not found");
      }

      res.status(200).json(customer);
    } catch (error) {
      next(error);
    }
  }
}

export default new CustomerController();