 import axios from 'axios';

// URL endpoint untuk tabel `ulasan`
const API_URL = "https://oefqhwlvcqncolbrxzny.supabase.co/rest/v1/ulasan";
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9lZnFod2x2Y3FuY29sYnJ4em55Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk5NzMxOTUsImV4cCI6MjA2NTU0OTE5NX0.JSLqLh51novqYfpgeCBa56dJdnbfSLXa9z5y56SYyss";

const headers = {
  apikey: API_KEY,
  Authorization: `Bearer ${API_KEY}`,
  "Content-Type": "application/json",
};

export const ulasanAPI = {
  async fetchUlasan() {
    const response = await axios.get(API_URL, { headers });
    return response.data;
  },

  async createUlasan(data) {
    const response = await axios.post(API_URL, data, { headers });
    return response.data;
  },

  async deleteUlasan(id) {
    await axios.delete(`${API_URL}?id=eq.${id}`, { headers });
  },
};
