import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'https://api.protck.com/api';

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token to requests
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('access_token') || localStorage.getItem('access');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Services API
export const servicesAPI = {
  getAll: (lang = 'ar') => apiClient.get('services', { params: { lang } }),
  getBySlug: (slug, lang = 'ar') => apiClient.get(`services/${slug}`, { params: { lang } }),
  create: (data) => apiClient.post('services', data),
  update: (slug, data) => apiClient.patch(`services/${slug}`, data),
  delete: (slug) => apiClient.delete(`services/${slug}`),
};

export const whyUsAPI = {
  getAll: (lang = 'ar') => apiClient.get('why-us', { params: { lang } }),
};

export const projectsAPI = {
  getAll: (lang = 'ar') => apiClient.get('projects', { params: { lang } }),
};

export const partnersAPI = {
  getAll: (lang = 'ar') => apiClient.get('partners', { params: { lang } }),
};

// Contact API
export const contactAPI = {
  submit: (data) => apiClient.post('contact/submit', data),
  getAll: () => apiClient.get('contacts'),
  getById: (id) => apiClient.get(`contacts/${id}`),
  markAsRead: (id) => apiClient.patch(`contacts/${id}/mark_as_read`),
};

// Auth API
export const authAPI = {
  login: async (username, password) => {
    const response = await apiClient.post('auth/login', { username, password });
    const { access, refresh, access_token, refresh_token } = response.data || {};
    const resolvedAccessToken = access_token || access;
    const resolvedRefreshToken = refresh_token || refresh;

    if (resolvedAccessToken) {
      localStorage.setItem('access_token', resolvedAccessToken);
      localStorage.setItem('access', resolvedAccessToken);
    }

    if (resolvedRefreshToken) {
      localStorage.setItem('refresh_token', resolvedRefreshToken);
      localStorage.setItem('refresh', resolvedRefreshToken);
    }

    return response;
  },
  refresh: async (refresh_token) => {
    const response = await apiClient.post('auth/refresh', { refresh: refresh_token });
    const { access, access_token } = response.data || {};
    const resolvedAccessToken = access_token || access;

    if (resolvedAccessToken) {
      localStorage.setItem('access_token', resolvedAccessToken);
      localStorage.setItem('access', resolvedAccessToken);
    }

    return response;
  },
};

// Users API
export const usersAPI = {
  getMe: () => apiClient.get('users/me'),
  getAll: () => apiClient.get('users'),
};

export default apiClient;
