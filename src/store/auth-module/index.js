import state from "./state";
import * as getters from "./getters";
import * as mutations from "./mutations";
import * as actions from "./actions";

/**
 * @type { import("vuex").Module }
 */
export default {
  namespaced: true,
  getters,
  mutations,
  actions,
  state,
};
