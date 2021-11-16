import { Store } from "vuex";
import {
  responseInterceptorFactory,
  onErrorInterceptor,
} from "./response-interceptor";

/**
 * @param {Store}
 * @param {import("axios").AxiosInstance}
 *
 * @returns {import("axios").AxiosInstance}
 */
export function intercept(store, client) {
  client.interceptors.response.use(
    responseInterceptorFactory(),
    onErrorInterceptor(store)
  );

  return client;
}
