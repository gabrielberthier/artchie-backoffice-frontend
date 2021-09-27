import { client } from "src/services/http-base";
import { AxiosError } from "axios";

class SignUpApiResponse {
  constructor(status, data) {
    this.status = status;
    this.data = data;
  }
}

export async function doSignUp({
  email,
  username,
  password,
  passwordConfirmation,
}) {
  return client
    .post("auth/signup", {
      email,
      username,
      password,
      passwordConfirmation,
    })
    .then(successHandler)
    .catch(errorHandler);
}

/**
 * @param {import("axios").AxiosResponse} response
 *
 * @returns {SignUpApiResponse}
 */
const successHandler = (response) => {
  return new SignUpApiResponse(response.status, response.data?.data?.token);
};

/**
 * @param {AxiosError} errorResponse
 *
 * @returns {SignUpApiResponse}
 */
const errorHandler = (errorResponse) => {
  let message = "";
  const { status, data } = errorResponse.response;
  switch (status) {
    case 403:
      message = "Your username or email have already been chosen by someone";
      break;
    case 422:
      message = map422(data);
      break;
    default:
      message = data;
      break;
  }
  return new SignUpApiResponse(status, message);
};

const map422 = (data) => {
  const validationErrors = {
    email: "Email in wrong format",
    username: "Username in a wrong format",
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
