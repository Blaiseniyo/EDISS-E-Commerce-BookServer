// Dependencies
import express, { Request, Response, NextFunction } from "express";

// Server configs
import { APP_PORT } from "./config/basic";

// Middlewares
import { handleError } from "./shared/middleware";

// Errors
import { NotFoundError } from "./utils/errors";

// Routes
import routes from "./routes";

// App configuration
import { configureApp } from "./app.configuration";

// Associations
import "./database/models/associations";

// App
const port = APP_PORT;

// Express app
const app = configureApp(express());


// Routes
app.get("/status", (req, res) => {
  res.status(200).type("text/plain").send("OK");
});

app.use("/", routes);


// catch all 404 errors
app.all("*", (req, res, next) => {
  const err = new NotFoundError("Page Requested not found");
  next(err);
});

// Error handling
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  handleError(err, req, res, next);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
