export const API_BASE = process.env.REACT_APP_API_URL;

export async function apiFetch(path, { token, ...options } = {}) {
  if (!API_BASE) throw new Error("Missing REACT_APP_API_URL in frontend .env");

  const headers = {
    "Content-Type": "application/json",
    ...(options.headers || {}),
  };

  if (token) headers.Authorization = `Bearer ${token}`;

  const res = await fetch(`${API_BASE}${path}`, { ...options, headers });
  const data = await res.json().catch(() => ({}));

  if (!res.ok) throw new Error(data?.error || "Request failed");
  return data;
}
