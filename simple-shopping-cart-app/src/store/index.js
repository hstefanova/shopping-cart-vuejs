import Vue from "vue";
import Vuex from "vuex";
import BookService from "@/services/BookService";
import firebase from "firebase";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    books: [],
    term: "",
    cartBooks: []
  },
  mutations: {
    SET_BOOKS(state, books) {
      state.books = books;
    },
    SET_TERM(state, term) {
      state.term = term;
    },
    ADD_CREATED_BOOK(state, book) {
      state.books.push(book);
    },
    ADD_BOOK_TO_CART(state, book) {
      state.cartBooks.push(book);
    },
    REMOVE_BOOK_FROM_CART(state, book) {
      let target = state.cartBooks.findIndex(cartBook => book === cartBook);
      state.cartBooks.splice(target, 1);
    }
  },
  actions: {
    fetchBooks({ commit }) {
      BookService.getBooks()
        .then(response => {
          commit("SET_BOOKS", response.data);
        })
        .catch(err => "There is an error: " + err.response);
    },
    searchByTerm({ commit }, term) {
      commit("SET_TERM", term);
    },
    createBook({ commit }, book) {
      return BookService.postBook(book).then(() => {
        commit("ADD_CREATED_BOOK", book);
      });
    },
    addToCart({ commit }, book) {
      commit("ADD_BOOK_TO_CART", book);
    },
    removeFromCart({ commit }, book) {
      commit("REMOVE_BOOK_FROM_CART", book);
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
    },
    cartUniqueBooks: state => {
      return state.cartBooks.filter((value, index, self) => {
        return self.indexOf(value) === index;
      });
    },
    cartTotal: state => {
      if (state.cartBooks.length) {
        return state.cartBooks
          .map(book => parseFloat(book.price))
          .reduce((acc, curr) => acc + curr)
          .toFixed(2);
      } else {
        return "No books in the cart";
      }
    },
    loggedIn: () => {
      return !firebase.auth().currentUser;
    }
  }
});
