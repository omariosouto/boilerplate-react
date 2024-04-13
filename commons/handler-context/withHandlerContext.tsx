import { CustomError, NotFoundError } from "@commons/errors";

export interface AppContext {}

type CallbackFunction<T> = (args: { context: AppContext; event: T }) => void | Promise<void>;

export function withHandlerContext(ctx: AppContext) {
  return function wrapper<T>(callback: CallbackFunction<T>) {
    const context: AppContext = ctx;

    const output = async (event: T): Promise<void> => {
      Promise.resolve(callback({ context, event }))
        .then(() => {
          console.log("Success");
        })
        .catch((error) => {
          if (error instanceof CustomError) {
            console.warn("[intercepted] Custom Error", error);
            // Handle general CustomError that is not a NotFoundError
          } else if (error instanceof Error) {
            console.error("[intercepted] Generic Error", error);
            throw error; // Rethrow if it's a general Error
          }
        });
    };
  
    return output;
  }
}