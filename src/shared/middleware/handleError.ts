import { Request, Response, NextFunction } from "express";
import { CustomError } from "../../utils/errors/CustomError";

const handleError = (
  error: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {

  if (error instanceof CustomError) {
    return res
      .status(error.statusCode)
      .json({
        message: error.message,
      });
  }

  return res.status(500).json({
    message: error.message,
  });

};

export default handleError;
