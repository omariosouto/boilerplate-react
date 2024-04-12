export class CustomError extends Error {
  status: number;

  constructor(message: string) {
    super(message);
    this.name = 'UnkownError';
    this.status = 500;
  }
}

export class NotFoundError extends CustomError {
  constructor(message: string) {
    super(message);
    this.name = 'NotFoundError';
    this.status = 404;
  }
}