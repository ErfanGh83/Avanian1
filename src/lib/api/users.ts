import axios from 'axios';
import { UserCreateRequest, UserResponse } from '../../schema/UserSchema';
import { ErrorResponse } from '../../schema/ApiErrorSchema';
import { API_ENDPOINTS, BASE_URL } from './constants';

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
      // Properly type the error response
      const apiError = error.response?.data as ErrorResponse;
      
      // You can add additional error processing here if needed
      // For example, logging or transforming the error
      
      throw apiError;
    }
    // For non-Axios errors, create a generic error response
    throw {
      detail: 'خطایی غیر منتظره رخ داده است.'
    } as ErrorResponse;
  }
};