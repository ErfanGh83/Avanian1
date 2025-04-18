export type ChatData = {
  active: boolean;
  createdAt: string;
  id: number;
  messages: Message[];
  title: string;
  user_id: number;
};

export type Message = {
  role: "ai" | "human";
  content: string;
  timeStamp: string;
};
