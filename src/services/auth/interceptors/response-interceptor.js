import { Store } from "vuex";

/**
 *
 * @param {Store} store
 * @returns
 */
export function responseInterceptorFactory(store) {
  /**
   *
   * @param {import("axios").AxiosRequestConfig} config
   * @returns {import("axios").AxiosRequestConfig}
   */
  return (config) => {
    return config;
  };
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
  return async (err) => {
    const originalRequest = err.config;
    const status = err.response?.status;
    if (status === 401 && originalRequest && !originalRequest._retry) {
      originalRequest._retry = true;
      const user = await store.dispatch("auth/setUserUp");
      if (user) {
        return user;
      }
      const wasLogged = store.dispatch("auth/logout");
      if (wasLogged) {
        router.push({ name: "landing" });
      }
    } else if (status === 500) {
      console.log(err);
    }
    return Promise.reject(err);
  };
}
