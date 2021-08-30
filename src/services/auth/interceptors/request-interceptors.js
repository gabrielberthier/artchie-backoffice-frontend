import {
  createNamespacedHelpers,
  useGetters,
} from "vuex-composition-helpers/dist";
const { useState, useActions } = createNamespacedHelpers("auth"); // specific module name

/**
 *
 * @param {import("axios").AxiosRequestConfig} config
 *
 * @returns {import("axios").AxiosRequestConfig}
 */
export function interceptRequest(config) {
  const { verifyAccess } = useActions(["verifyAccess"]);
  verifyAccess.then((result) => {
    if (!result) {
      location.reload(true);
    }
  });
  return config;
}
