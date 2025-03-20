/**
 *
 *  Dependencies
 *
 */
import express, { Express, Request, Response } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import session from "express-session";
import morgan from "morgan";

/**
 *
 * Configs
 *
 */
import { SESSION_SECRET, FRONTEND_URL, NODE_ENV } from "./config/basic";

/**
 *
 * Utils
 *
 */

const corsOptions = {
  origin: [FRONTEND_URL],
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
};

const SESSION_COOKIE_SECURE = NODE_ENV === "prod";
const SESSION_COOKIE_MAX_AGE = 24 * 60 * 60 * 1000; // 24 hours
const MORGAN_FORMAT = NODE_ENV === "prod" ? "combined" : "dev";

export const configureApp = (app: Express): Express => {
  morgan.token("user", (req: Request, res: Response) => {
    return req.user ? JSON.stringify(req.user) : "user not logged in";
  });
  app.use(cors(corsOptions));
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cookieParser());
  app.use(morgan(MORGAN_FORMAT));
  app.use(
    session({
      secret: SESSION_SECRET || "secret",
      resave: false,
      saveUninitialized: false,
      cookie: {
        secure: SESSION_COOKIE_SECURE,
        maxAge: SESSION_COOKIE_MAX_AGE,
      },
    })
  );

  return app;
};
