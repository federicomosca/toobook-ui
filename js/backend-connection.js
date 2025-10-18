const API_BASE_URL = 'http://localhost:8080';

const apiFetch = async (url, method, body = null) => {
  console.log(`Sending ${method} request to ${url}`);
  const options = {
    method,
    headers: { 'Content-Type': 'application/json' }
  };

  if (body) options.body = JSON.stringify(body);

  const response = await fetch(`${API_BASE_URL}${url}`, options);

  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  if (response.status === 204) return null;

  return await response.json();
};

export { API_BASE_URL, apiFetch };
