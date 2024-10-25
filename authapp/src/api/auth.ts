import axios, { AxiosInstance } from 'axios';

export const api: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

// Add this to your Axios instance configuration
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('access_token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export interface SignUpData {
  email: string;
  name: string;
  password: string;
}

export interface SignInData {
  email: string;
  password: string;
}

export interface AuthResponse {
  access_token: string;
  refresh_token: string;
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
}

export const signUp = async (userData: { name: string; email: string; password: string }) => {
  try {
    const response = await api.post('/auth/signup', userData);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      if (error.response.status === 409) {
        throw new Error('An error occurred. Please try again later.');
      }
    }
    throw error;
  }
};

export const signIn = async (loginData: { email: string; password: string }) => {
  try {
    const response = await api.post('/auth/signin', loginData);
    localStorage.setItem('access_token', response.data.access_token);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      if (error.response.status === 401) {
        throw new Error('Invalid username or password');
      }
    }
    throw error;
  }
};

export const refreshToken = async () => {
  try {
    const response = await api.post('/auth/refresh-token');
    localStorage.setItem('access_token', response.data.access_token);
    return response.data;
  } catch (error) {
    throw new Error('Failed to refresh token');
  }
};

export const getProfile = async () => {
  try {
    const response = await api.get('/auth/profile');
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch profile');
  }
};

export const checkAuthStatus = async (): Promise<boolean> => {
  try {
    await api.get('/auth/profile');
    return true;
  } catch (error) {
    return false;
  }
};

export const logout = () => {
  localStorage.removeItem('access_token');
};
