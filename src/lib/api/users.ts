import axios, { AxiosError } from 'axios';
import { UserCreateRequest, UserResponse } from '../../schema/UserSchema';
import { API_ENDPOINTS, BASE_URL } from './constants';

interface APIError {
  message: string;
  code?: number | string;
  details?: unknown;
  status?: number;
}

interface ErrorResponse {
  detail?: string;
  message?: string;
  code?: number | string;
  // Add any other fields your API might return
}

export const createUser = async (userData: UserCreateRequest): Promise<UserResponse> => {
  try {
    const response = await axios.post<UserResponse>(
      `${BASE_URL}${API_ENDPOINTS.USERS}`,
      userData,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError<ErrorResponse>;
      
      // Create a structured error object
      const apiError: APIError = {
        message: axiosError.response?.data?.detail || 
                axiosError.response?.data?.message || 
                axiosError.message ||
                'خطای ناشناخته در ایجاد کاربر',
        code: axiosError.response?.status || 
             axiosError.response?.data?.code ||
             'USER_CREATION_FAILED',
        status: axiosError.response?.status,
        details: {
          ...axiosError.response?.data,
          config: {
            url: axiosError.config?.url,
            method: axiosError.config?.method,
          }
        }
      };
      
      // Handle specific status codes with custom messages
      if (axiosError.response?.status === 400) {
        apiError.message = 'داده‌های ارسالی نامعتبر هستند';
      } else if (axiosError.response?.status === 409) {
        apiError.message = 'کاربر با این مشخصات قبلاً ثبت‌نام کرده است';
      } else if (axiosError.response?.status === 429) {
        apiError.message = 'درخواست‌های زیادی ارسال کرده‌اید. لطفاً کمی صبر کنید';
      }

      throw apiError;
    }
    
    // For non-Axios errors
    const unknownError: APIError = {
      message: error instanceof Error ? error.message : 'خطای غیرمنتظره در ایجاد کاربر',
      code: 'UNKNOWN_ERROR',
      details: error
    };
    
    throw unknownError;
  }
};