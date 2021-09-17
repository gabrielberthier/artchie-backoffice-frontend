import { useRouter } from "vue-router";
import { Store, useStore } from "vuex";

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
    const renew = config.headers["X-RENEW-TOKEN"];
    console.log(store);
    const loggedIn = store.getters["auth/loggedIn"];

    if (loggedIn && renew) {
      store.dispatch("auth/login", renew).catch(console.error);
      delete config.headers;
    }
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
   * @return {Promise<never}
   */
  return (err) => {
    if (
      err.response?.status === 401 &&
      err.config &&
      !err.config.__isRetryRequest
    ) {
      store.dispatch("auth/logout").then((wasLogged) => {
        if (wasLogged) router.push({ name: "home" });
      });
    } else if (err.response?.status === 500) {
      console.log(err);
    }
    return Promise.reject(err);
  };
}
