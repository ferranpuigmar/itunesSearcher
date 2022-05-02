import axios, { AxiosRequestHeaders } from "axios";

const client = axios.create({ baseURL: process.env.REACT_APP_API_BASE_URL });

client.interceptors.response.use(
  (response) => {
    return response;
  },
  async (err) => {
    return Promise.reject(err.response);
  }
);

const httpClient = () => {
  const headers: AxiosRequestHeaders = {
    "Content-type": "application/json",
  };

  const get = async <T>(url: string): Promise<T> => {
    const res = await client.get<T>(url, { headers });
    return res.data;
  };

  return {
    get,
  };
};

export default httpClient;
