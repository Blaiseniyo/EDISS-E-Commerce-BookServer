import { CustomError } from "./CustomError";

/** 4xx Client Error
 * The request could not be completed due to a conflict with the current state of the resource.
 * This code is used in situations where the user might be able to resolve the conflict and resubmit the request.
 * For example, a resource already exists when trying to create a new one with the same identifier.
 * Wikipedia
 * Error code response for a resource that already exists.
 */
export class ResourceAlreadyExistsError extends CustomError {
    statusCode = 422;
    errorType = "Unprocessable Entity";

    constructor(msg: string = "Resource already exists") {
        super(msg);
        Object.setPrototypeOf(this, ResourceAlreadyExistsError.prototype);
    }

    serializeErrors() {
        return [
            {
                message: this.message,
            },
        ];
    }
}
