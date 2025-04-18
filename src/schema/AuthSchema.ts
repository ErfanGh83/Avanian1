export interface OTPRequest {
  phone_number: string;
}

export interface OTPVerifyRequest {
  phone_number: string;
  otp: string;
}

export interface AuthResponse {
  access_token: string;
  chat_session_id: string;
  token_type: string;
}

export interface AuthErrorResponse {
  message: string;
  code?: string;
  details?: string;
}