import { computed } from "vue"; // or '@vue/composition-api' in Vue 2.x
import useVuelidate from "@vuelidate/core";
import { required, minLength } from "@vuelidate/validators";
/**
 *
 * @param {object} state
 * @returns { import("vue$").Ref}
 */
export default function createValidation(state) {
  const rules = computed(() => ({
    access: {
      required,
    },
    password: {
      required,
      min: minLength(6),
    },
  }));

  return useVuelidate(rules, state);
}
