import { CustomError, NotFoundError } from "@commons/errors";

export interface AppContext {}

type CallbackFunction<T> = (args: { context: AppContext; event: T }) => void | Promise<void>;

export function withHandlerContext(ctx: AppContext) {
  return function wrapper<T>(callback: CallbackFunction<T>) {
    const context: AppContext = ctx;

    const output = (event: T): void => {
      try {
        callback({ context, event });
      } catch (error) {
        if (error instanceof NotFoundError) {
          console.error("Not Found Error");
          // Handle NotFoundError specifically
        } else if (error instanceof CustomError) {
          // Handle general CustomError that is not a NotFoundError
        } else if (error instanceof Error) {
          throw error; // Rethrow if it's a general Error
        }
      }
    };
  
    return output;
  }
}