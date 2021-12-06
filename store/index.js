import Vuex from "vuex";
import todos from "./modules/todos";

new Vuex.Store({
  state: () => ({
    counter: 0,
  }),
  mutations: {
    increment(state) {
      state.counter++;
    },
  },
  modules: {
    todos,
  },
});
