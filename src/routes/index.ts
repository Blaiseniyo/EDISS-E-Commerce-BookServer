/*
 file: index.ts
 description: This file contains the routes for the API
 author: Blaise Niyonkuru
*/

import express from "express";

import bookRoutes from "../features/books/routes";
import customerRoutes from "../features/customers/routes";

const routes = express.Router();

routes.use("/books", bookRoutes);
routes.use("/customers", customerRoutes);

export default routes;
