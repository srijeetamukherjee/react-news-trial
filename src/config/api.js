const API_DOMAIN = "https://newsapi.org/v2/top-headlines?country=";
const API_SEARCH_DOMAIN = "https://newsapi.org/v2/everything?q=";
const API_KEY = "b3e4818de8544a0f943afd7ab61e2eb4"; // Replace with your actual NewsAPI key
export const endpointPath = (country, category) =>
  `${API_DOMAIN}${country}&category=${category}&apiKey=${API_KEY}`;
export const endpointSearch = (searchQuery) =>
  `${API_SEARCH_DOMAIN}${searchQuery}&apiKey=${API_KEY}`;
