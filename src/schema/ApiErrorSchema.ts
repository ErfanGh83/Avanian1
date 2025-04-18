export interface ValidationErrorItem {
    loc: (string | number)[];
    msg: string;
    type: string;
  }
  
  export interface ErrorResponse {
    detail: ValidationErrorItem[] | string;
  }

  export interface APIError {
    message: string;
    code?: string;
    details?: string;
  }

  export type ApiErrorResponse = ErrorResponse;