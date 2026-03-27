export const api = async (url: string, options?: RequestInit) => {
  const res = await fetch(`http://localhost:3000${url}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
    },
  });

  return res.json();
};