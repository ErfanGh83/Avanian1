export const setAuthToken = (token: string): void => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('access_token', token);
  }
};

export const setSessionId = (session_id: string): void => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('session_id', session_id);
  }
};

export const getSessionId = (): string | null => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('session_id');
  }
  return null;
};

export const getAuthToken = (): string | null => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('access_token');
  }
  return null;
};

export const removeSessionId = (): void => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('session_id');
  }
};

export const removeAuthToken = (): void => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('access_token');
  }
};