import { createStore } from "vuex";

const store = createStore({
  state: {wishlistCount: 0},

  mutations: {INCREMENT_WISHLIST(state) {
    state.wishlistCount++;
  }},

  actions: {saveCourseToWishlist({ commit }) {
  commit('INCREMENT_WISHLIST');},
  }
});

export default store;