import { CustomError } from "./CustomError";

/**
 * Represents an HTTP 404 Not Found error.
 * This error is used when the server cannot find the requested resource.
 * It does not indicate whether the condition is temporary or permanent.
 * If the resource is permanently unavailable, the 410 (Gone) status code should be used instead.
 * This status code is also used when the server does not wish to disclose the exact reason for the refusal or when no other response is applicable.
 * Commonly used to mask 401 or 403 errors for security reasons.
 */
export class NotFoundError extends CustomError {
  statusCode = 404;
  errorType = "Not Found";

  constructor(msg: string = "Resource not found") {
    super(msg);
    Object.setPrototypeOf(this, NotFoundError.prototype);
  }

  serializeErrors() {
    return [{ message: this.message }];
  }
}
