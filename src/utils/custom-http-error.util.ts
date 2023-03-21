/* eslint-disable max-classes-per-file */
export class BadRequestException extends Error {
    error: boolean;
    statusCode: number;
    constructor(message) {
      super();
      this.error = true;
      this.statusCode = 400;
      this.message = message;
    }
  }
  
export class UnauthorizedException extends Error {
    error: boolean;
    statusCode: number;
    constructor(message) {
      super();
      this.error = true;
      this.statusCode = 401;
      this.message = message;
    }
  }
  
export class ForbiddenException extends Error {
    statusCode: number;
    error: boolean;
    constructor(message) {
      super();
      this.error = true;
      this.statusCode = 403;
      this.message = message;
    }
  }
  
export class NotFoundException extends Error {
    error: boolean;
    statusCode: number;
    constructor(message) {
      super();
      this.error = true;
      this.statusCode = 404;
      this.message = message;
    }
  }
  
export class ConflictException extends Error {
    error: boolean;
    statusCode: number;
    constructor(message) {
      super();
      this.error = true;
      this.statusCode = 409;
      this.message = message;
    }
  }
  
export class InternalServerErrorException extends Error {
    error: boolean;
    statusCode: number;
    constructor(error) {
      super();
      this.error = true;
      this.statusCode = 500;
      this.message = error.message || JSON.stringify(error);
    }
  }
