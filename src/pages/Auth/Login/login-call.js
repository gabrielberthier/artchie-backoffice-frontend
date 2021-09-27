import { client } from "src/services/http-base";
import { AxiosError } from "axios";

class LoginApiResponse {
  constructor(status, data) {
    this.status = status;
    this.data = data;
  }
}

export async function doLogin({ access, password }) {
  return client
    .post("auth/login", {
      access,
      password,
    })
    .then(successHandler)
    .catch(errorHandler);
}

/**
 * @param {import("axios").AxiosResponse} response
 *
 * @returns {LoginApiResponse}
 */
const successHandler = (response) => {
  return new LoginApiResponse(response.status, response.data?.data?.token);
};

/**
 * @param {AxiosError} errorResponse
 *
 * @returns {LoginApiResponse}
 */
const errorHandler = (errorResponse) => {
  let message = "";
  const { status, data } = errorResponse.response;
  switch (status) {
    case 400:
    case 403:
    case 404:
      message = "Your credentials are invalid";
      break;
    case 422:
      message = map422(data);
      break;
    default:
      message = data;
      break;
  }
  return new LoginApiResponse(status, message);
};

const map422 = (data) => {
  const validationErrors = {
    access: "Username or email in a wrong format",
    password: "Password in wrong format",
  };

  const errors = data?.error?.description
    ?.match(/\[(\w+)]/g)
    .map((el) => el.substring(1, el.length - 1));

  let message = "";

  for (const error of errors) {
    message = validationErrors[error] + "\n";
  }

  return message;
};
