import { computed } from "vue"; // or '@vue/composition-api' in Vue 2.x
import useVuelidate from "@vuelidate/core";
import {
  required,
  minLength,
  email,
  sameAs,
  helpers,
} from "@vuelidate/validators";
import { passwordRegex } from "./password-requirements";

/**
 *
 * @param {import('vue').ReactiveEffect} state
 * @returns { import("vue").Ref<import("@vuelidate/core").BaseValidation}
 */
export default function createSignUpValidation(state) {
  const passwordRuleRegex = helpers.regex(passwordRegex);
  const validationPassword = helpers.withMessage(
    "This field must hava an upper case letter and at least a number",
    passwordRuleRegex
  );
  const passwordRef = computed(() => state.password);

  const samePassword = helpers.withMessage(
    "Password and password confirmation must have the same value",
    sameAs(passwordRef)
  );

  const rules = computed(() => ({
    email: {
      required,
      email,
    },
    username: {
      required,
      min: minLength(6),
    },
    password: {
      required,
      min: minLength(6),
      validationPassword,
    },
    passwordConfirmation: {
      samePassword,
    },
  }));

  return useVuelidate(rules, state);
}
