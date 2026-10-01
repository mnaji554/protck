import create from 'zustand';
import { servicesAPI, whyUsAPI, projectsAPI, partnersAPI } from '../services/api';

const normalizeListResponse = (payload) => {
  if (Array.isArray(payload)) return payload;
  if (payload && Array.isArray(payload.results)) return payload.results;
  return [];
};

export const useServicesStore = create((set) => ({
  services: [],
  whyUs: [],
  projects: [],
  partners: [],
  loading: false,
  error: null,

  fetchServices: async (lang = 'ar') => {
    set({ loading: true, error: null });
    try {
      const response = await servicesAPI.getAll(lang);
      set({ services: normalizeListResponse(response.data), loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },

  fetchWhyUs: async (lang = 'ar') => {
    set({ loading: true, error: null });
    try {
      const response = await whyUsAPI.getAll(lang);
      set({ whyUs: normalizeListResponse(response.data), loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },

  fetchProjects: async (lang = 'ar') => {
    set({ loading: true, error: null });
    try {
      const response = await projectsAPI.getAll(lang);
      set({ projects: normalizeListResponse(response.data), loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },

  fetchPartners: async (lang = 'ar') => {
    set({ loading: true, error: null });
    try {
      const response = await partnersAPI.getAll(lang);
      set({ partners: normalizeListResponse(response.data), loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },
}));

export const initializeServices = async () => {
  await useServicesStore.getState().fetchServices();
};

export const initializeWhyUs = async () => {
  await useServicesStore.getState().fetchWhyUs();
};
