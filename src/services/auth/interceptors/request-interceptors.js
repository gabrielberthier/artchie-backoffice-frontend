import { Store } from "vuex";

/**
 *
 * @param {Store} store
 * @returns {CallableFunction}
 */
export function interceptRequestFactory(store) {
  /**
   *
   * @param {import("axios").AxiosRequestConfig} config
   *
   * @returns {import("axios").AxiosRequestConfig}
   */
  return (config) => {
    if (config.url !== "auth/logout") {
      store.dispatch("auth/verifyAccess").then((result) => {
        if (!result) {
          location.reload(true);
        }
      });
    }

    return config;
  };
}
