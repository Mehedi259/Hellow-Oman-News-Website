const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://46.225.103.236:8000/api';

interface FetchOptions extends RequestInit {
  data?: any;
}

export const fetchAPI = async (endpoint: string, options: FetchOptions = {}) => {
  const { data, headers, ...customConfig } = options;

  const config: RequestInit = {
    method: data ? 'POST' : 'GET',
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
    ...customConfig,
  };

  if (data) {
    config.body = JSON.stringify(data);
  }

  // Use next-specific revalidation if fetching directly in server components
  if (!config.cache && !config.next) {
    config.next = { revalidate: 60 }; // default 60s cache
  }

  const response = await fetch(`${API_URL}${endpoint}`, config);
  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message || 'Something went wrong fetching data');
  }

  return result;
};
