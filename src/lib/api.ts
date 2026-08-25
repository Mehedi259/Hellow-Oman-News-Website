const isServer = typeof window === 'undefined';
const API_URL = isServer 
  ? (process.env.NEXT_PUBLIC_API_URL || 'http://46.225.103.236:8000/api')
  : '/api';

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

  // Disable Next.js data cache to prevent massive ISR write unit consumption
  // since the payload exceeds Vercel's 2MB cache limit and fails to cache,
  // causing continuous write attempts on every request.
  config.cache = 'no-store';

  const response = await fetch(`${API_URL}${endpoint}`, config);
  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message || 'Something went wrong fetching data');
  }

  return result;
};
