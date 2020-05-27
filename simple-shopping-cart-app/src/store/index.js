import Vue from "vue";
import Vuex from "vuex";
import BookService from "@/services/BookService";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    book: {},
    books: [],
    term: ""
  },
  mutations: {
    ADD_CREATED_BOOK(state, book) {
      state.books.push(book);
    },
    SET_BOOKS(state, books) {
      state.books = books;
    },
    SET_TERM(state, term) {
      state.term = term;
    }
  },
  actions: {
    createBook({ commit }, book) {
      return BookService.postBook(book).then(() => {
        commit("ADD_CREATED_BOOK", book);
      });
    },
    fetchBooks({ commit }) {
      BookService.getBooks()
        .then(response => {
          commit("SET_BOOKS", response.data);
        })
        .catch(err => "There is an error: " + err.response);
    },
    searchByTerm({ commit }, term) {
      commit("SET_TERM", term);
    }
  },
  getters: {
    booksByTerm: state => {
      return state.books.filter(book => {
        return (
          JSON.stringify(book)
            .toLowerCase()
            .indexOf(state.term.toLowerCase()) !== -1
        );
      });
    }
  }
});
