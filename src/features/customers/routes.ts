/*
routes.ts
description: This file contains the routes for the customers
author: Blaise Niyonkuru<blaiseniyonkuru12@gmail.com>
*/

import express from "express";
import customerController from "./controllers";
import validateResource from "../../shared/middleware/validator";
import { createCustomerSchema, getCustomerByIdSchema, getCustomerByUserIdSchema } from "./types";

const routes = express.Router();

// POST /customers - Add a new customer
routes.post(
  "/",
  validateResource(createCustomerSchema),
  customerController.createCustomer
);

// GET /customers/:id - Get a customer by ID
routes.get(
  "/:id",
  validateResource(getCustomerByIdSchema),
  customerController.getCustomerById
);

// GET /customers?userId=xxx - Get a customer by user ID (email)
routes.get(
  "/",
  validateResource(getCustomerByUserIdSchema),
  customerController.getCustomerByUserId
);

export default routes;