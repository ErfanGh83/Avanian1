import { ErrorResponse } from './ApiErrorSchema';

export interface UserCreateRequest {
  name: string;
  phone_number: string;
  age: number;
}

export interface UserResponse {
  name: string;
  phone_number: string;
  age: number;
  id: number;
  otp_verified: boolean;
}

export type UserErrorResponse = ErrorResponse;