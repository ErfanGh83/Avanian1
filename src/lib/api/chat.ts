import axios from "axios";
import { getAuthToken, getSessionId } from "@/utils/storage";
import { Message } from "@/schema/chatDataSchema";
import { BASE_URL, API_ENDPOINTS } from "./constants";

export const fetchMessages = async (): Promise<Message[] | null> => {
  const token = getAuthToken();
  const sessionId = getSessionId();

  if (!sessionId || !token) {
    throw new Error("UNAUTHENTICATED");
  }

  const response = await axios.get(
    `${BASE_URL}${API_ENDPOINTS.SESSIONS}${sessionId}/history`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Session-Id": sessionId,
      },
    }
  );

  return response.data;
};

export const sendMessage = async (text: string): Promise<string> => {
  const token = getAuthToken();
  const sessionId = getSessionId();

  if (!token || !sessionId) {
    throw new Error("UNAUTHENTICATED");
  }

  const response = await axios.post(
    `${BASE_URL}${API_ENDPOINTS.SEND_MESSAGE}${sessionId}/message`,
    { message: text },
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  );

  return response.data.response;
};
