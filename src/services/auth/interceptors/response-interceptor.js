import {
  createNamespacedHelpers,
  useGetters,
} from "vuex-composition-helpers/dist";
import { useRouter } from "vue-router";

const { useState, useActions } = createNamespacedHelpers("auth"); // specific module name

/**
 *
 * @param {import("axios").AxiosRequestConfig} config
 * @returns {import("axios").AxiosRequestConfig}
 */
export function onRenew(config) {
  const renew = config.headers["x-refresh-token"];
  const { login } = useActions(["login"]);

  const { loggedIn } = useGetters(["loggedIn"]);

  if (loggedIn && renew) {
    login(renew).catch(console.error);
    delete config.headers;
  }
  return config;
}

/**
 * @param {import('axios').AxiosError} err
 *
 * @return {Promise<never}
 */
export function onError(err) {
  if (
    err.response.status === 401 &&
    err.config &&
    !err.config.__isRetryRequest
  ) {
    const { logout } = useActions(["login"]);
    const router = useRouter();

    logout().then((wasLogged) => {
      if (wasLogged) router.push({ name: "home" });
    });
  } else if (err.status === 500) {
    console.log(err);
  }
  return Promise.reject(err);
}
