/*
services.ts
description: This file contains the services to handle business logic for the customers
author: Blaise Niyonkuru<blaiseniyonkuru12@gmail.com>
*/

import Customer from "../../database/models/customer";
import { CreateCustomerInput } from './types';
import { ResourceAlreadyExistsError, NotFoundError } from "../../utils/errors";

export class CustomerService {
  // Add a new customer
  async createCustomer(input: CreateCustomerInput['body']): Promise<Customer> {
    try {
      // Check if customer with given userId already exists
      const existingCustomer = await this.getCustomerByUserId(input.userId);

      if (existingCustomer) {
        throw new ResourceAlreadyExistsError("This user ID already exists in the system.");
      }

      // Create new customer
      const customer = await Customer.create(input);

      return customer;
    } catch (error) {
      throw error;
    }
  }

  // Get a customer by numeric ID
  async getCustomerById(id: number): Promise<Customer | null> {
    try {
      const customer = await Customer.findByPk(id);
      return customer;
    } catch (error) {
      throw error;
    }
  }

  // Get a customer by user ID (email)
  async getCustomerByUserId(userId: string): Promise<Customer | null> {
    try {
      const customer = await Customer.findOne({
        where: {
          userId: userId
        }
      });
      return customer;
    } catch (error) {
      throw error;
    }
  }
}

export default new CustomerService();