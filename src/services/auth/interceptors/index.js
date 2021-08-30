import { client } from "src/services/http-base";
import { interceptRequest } from "./request-interceptors";
import { onError, onRenew } from "./response-interceptor";

export function intercept() {
  client.interceptors.response.use(onRenew, onError);
  client.interceptors.request.use(interceptRequest, (error) =>
    Promise.reject(error)
  );
}
