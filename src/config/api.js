const API_DOMAIN = "https://newsapi.org/v2/top-headlines?country=";
const API_SEARCH_DOMAIN = "https://newsapi.org/v2/everything?q=";
const API_KEY = "My APi Key"; 
export const endpointPath = (country, category) =>
  `${API_DOMAIN}${country}&category=${category}&apiKey=${API_KEY}`;
export const endpointSearch = (searchQuery) =>
  `${API_SEARCH_DOMAIN}${searchQuery}&apiKey=${API_KEY}`;
