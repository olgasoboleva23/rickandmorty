import Vue from "vue";
import Vuex from "vuex";
import axiosInstance from "@/api/index";
import { CHARACTERS_BY_PAGE } from "@/api/routes";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    characters: {},
  },
  mutations: {
    setCharacters(state, { page, characters }) {
      state.characters[page] = characters;
    },
  },
  actions: {
    fetchCharacters(page) {
      return axiosInstance.get(CHARACTERS_BY_PAGE(page))
      .then(res => {
        console.log(res)
      })
      .catch(err => console.log(err));
    }
  },
});
