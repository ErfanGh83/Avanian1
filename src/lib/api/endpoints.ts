import axios from 'axios';
import apiClient from './client';
import { User, ApiErrorResponse } from '@/types/api/user';

export const createUser = async (userData: Omit<User, 'id' | 'otp_verified'>) => {
  try {
    const response = await apiClient.post<User>('/users/', userData);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError<ApiErrorResponse>(error)) {
      // Handle validation errors
      if (error.response && error.response.status === 422) {
        throw error.response.data.detail;
      }
    }
    throw error;
  }
};