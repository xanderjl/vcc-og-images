const { VERCEL_URL, VERCEL_ENV } = process.env;

const baseUrl =
  VERCEL_ENV === "development"
    ? "http://localhost:3000"
    : `https://${VERCEL_URL}`;

export default baseUrl;
