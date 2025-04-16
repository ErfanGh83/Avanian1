import { ErrorResponse } from "./ApiErrorSchema";

export interface OTPRequest {
  phone_number: string;
}

export interface OTPVerifyRequest {
  phone_number: string;
  otp: string;
}

export interface AuthResponse {
  access_token: string;
  token_type: string;
}

export type AuthErrorResponse = ErrorResponse;