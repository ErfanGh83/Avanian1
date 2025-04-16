export interface User {
    name: string;
    phone_number: string;
    age: number;
    id?: number;
    otp_verified?: boolean;
}

export interface ValidationError {
    loc: (string | number)[];
    msg: string;
    type: string;
}

export interface ApiErrorResponse {
    detail: ValidationError[];
}