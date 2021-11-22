import { api } from "src/boot/axios";
import { Store } from "vuex";

export function responseInterceptorFactory() {
  /**
   *
   * @param {import("axios").AxiosRequestConfig} config
   * @returns {import("axios").AxiosRequestConfig}
   */
  return (config) => {
    return config;
  };
}

let isAlreadyFetchingAccessToken = false;
let subscribers = [];

function onAccessTokenFetched(access_token) {
  subscribers = subscribers.filter((callback) => callback(access_token));
}

function addSubscriber(callback) {
  subscribers.push(callback);
}

/**
 *
 * @param {Store} store
 * @returns
 */
export function onErrorInterceptor(store) {
  /**
   * @param {import('axios').AxiosError} err
   *
   * @return {Promise<never>}
   */
  return async (error) => {
    const {
      config,
      response: { status },
    } = error;
    const originalRequest = config;
    console.log(isAlreadyFetchingAccessToken);

    if (status === 401 && !isAlreadyFetchingAccessToken) {
      isAlreadyFetchingAccessToken = true;

      const response = await api.get("/auth/refresh-token/", {
        withCredentials: true,
      });

      const authToken = response.headers["x-renew-token"];

      if (authToken) {
        isAlreadyFetchingAccessToken = false;
        store.dispatch("auth/login", authToken);
        onAccessTokenFetched(authToken);
      } else {
        store.dispatch("auth/logout");
      }

      const retryOriginalRequest = new Promise((resolve) => {
        addSubscriber((access_token) => {
          originalRequest.headers.Authorization = "Bearer " + access_token;
          resolve(api(originalRequest));
        });
      });
      return retryOriginalRequest;
    }
    return Promise.reject(error);
  };
}
