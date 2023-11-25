import axios from "axios";

const callApi = () => {
  const axiosInstance = axios.create({
    baseURL: "https://imis.silverage.co/api/shop",
  });
  axiosInstance.interceptors.request.use(
    (config) => {
      config.withCredentials = true;
      return config;
    },
    (err) => {
      throw err;
    }
  );

  axiosInstance.interceptors.response.use(
    (res) => {
      return res;
    },
    (err) => {
      const res = err?.response;
      if (res) {
        if (res.status === 422) {
          throw new Error();
        }
      }
      {
        throw err;
      }
    }
  );
  return axiosInstance;
};

export default callApi;
