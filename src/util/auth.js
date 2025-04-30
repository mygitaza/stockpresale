export const isAuthenticated = () => {
  const tokenCookie = document.cookie
    .split(";")
    .find((cookie) => cookie.trim().startsWith("token="));

  if (!tokenCookie) return false;

  const tokenValue = tokenCookie.split("=")[1];
  return !!tokenValue && tokenValue !== "undefined" && tokenValue !== "null";
};
