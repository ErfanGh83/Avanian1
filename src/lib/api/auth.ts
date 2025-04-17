import axios, { AxiosError } from 'axios';
import { OTPVerifyRequest, AuthResponse, AuthErrorResponse } from '../../schema/AuthSchema';
import { API_ENDPOINTS, BASE_URL } from './constants';


export const requestOTP = async (phone_number: string): Promise<void> => {
  try {
    await axios.post(`${BASE_URL}${API_ENDPOINTS.REQUEST_OTP}`, { phone_number });
  } catch (error) {
    console.log(error)
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError<AuthErrorResponse>;
      throw axiosError.response?.data ?? { detail: 'خطای ناشناخته رخ داده است' };
    }
    throw { detail: 'خطای اتصال رخ داده است.' };
  }
};

export const verifyOTP = async (data: OTPVerifyRequest): Promise<AuthResponse> => {
  try {
    const response = await axios.post<AuthResponse>(`${BASE_URL}${API_ENDPOINTS.VERIFY_OTP}`, data);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError<AuthErrorResponse>;
      throw axiosError.response?.data ?? { detail: 'خطای ناشناخته رخ داده است' };
    }
    throw { detail: 'خطای اتصال رخ داده است' };
  }
};