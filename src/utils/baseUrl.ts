const { VERCEL_URL, VERCEL_ENV } = process.env;

const baseUrl =
  VERCEL_ENV === "production" && VERCEL_URL
    ? `https://${VERCEL_URL}`
    : VERCEL_ENV === "preview" && VERCEL_URL
      ? `https://${VERCEL_URL}`
      : "http://localhost:3000";

export default baseUrl;
