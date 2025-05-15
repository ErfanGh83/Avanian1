import axios from "axios";
import { getAuthToken, getSessionId } from "@/utils/storage";
import { Message } from "@/schema/chatDataSchema";
import { BASE_URL } from "./constants";

export const fetchMessages = async (): Promise<Message[] | null> => {
  const token = getAuthToken();
  const sessionId = getSessionId();

  if (!sessionId || !token) {
    throw new Error("UNAUTHENTICATED");
  }

  const response = await axios.get(
    `${BASE_URL}/chat/sessions/${sessionId}/history`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Session-Id": sessionId,
      },
    }
  );

  return response.data;
};
