import axios_core from "axios";

export async function login(credentials) {
  const axios = axios_core.create({
    baseURL: "http://localhost:3000",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const response = await axios.post(
    `http://localhost:3000/api/auth/login`,
    credentials
  );
  return response.data;
}
