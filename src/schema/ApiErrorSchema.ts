export interface ValidationErrorItem {
    loc: (string | number)[];
    msg: string;
    type: string;
  }
  
  export interface ErrorResponse {
    detail: ValidationErrorItem[] | string;
  }

  export type ApiErrorResponse = ErrorResponse;