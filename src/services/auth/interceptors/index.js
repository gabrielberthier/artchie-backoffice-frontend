import { client } from "src/services/http-base";
import { Store } from "vuex";
import { interceptRequestFactory } from "./request-interceptors";
import {
  responseInterceptorFactory,
  onErrorInterceptor,
} from "./response-interceptor";

/**
 * @param {Store}
 */
export function intercept(store) {
  client.interceptors.response.use(
    responseInterceptorFactory(store),
    onErrorInterceptor(store)
  );
  client.interceptors.request.use(interceptRequestFactory(store), (error) =>
    Promise.reject(error)
  );
}
