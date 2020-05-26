import Vue from "vue";
import Vuex from "vuex";
import BookService from "@/services/BookService";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    book: {},
    books: []
  },
  mutations: {
    ADD_BOOK(state, book) {
      state.books.push(book);
    }
  },
  actions: {
    createBook({ commit }, book) {
      return BookService.postBook(book).then(() => {
        commit("ADD_BOOK", book);
      });
    }
  }
});
