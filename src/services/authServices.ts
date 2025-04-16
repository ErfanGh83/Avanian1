import { BASE_URL } from '@/constants/baseUrl';
import axios from 'axios';

interface UserResponse {
  name: string;
  phone_number: string;
  age: number;
  id: number;
  otp_verified: boolean;
}

interface ValidationError {
  loc: (string | number)[];
  msg: string;
  type: string;
}

export const registerUser = async (userData: {
  name: string;
  phone_number: string;
  age: number;
}) => {
  try {
    const response = await axios.post<UserResponse>(
      `${BASE_URL}/users/`,
      userData
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 422) {
        const validationErrors = error.response.data.detail as ValidationError[];
        throw new Error(
          validationErrors.map(err => err.msg).join('\n')
        );
      }
      throw new Error(error.response?.data?.message || 'Registration failed');
    }
    throw new Error('An unexpected error occurred');
  }
};