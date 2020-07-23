/* eslint-disable prettier/prettier */
import Vue from "vue";
import Vuex from "vuex";
import { db } from "../main";
import firebase from "firebase";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    book: {},
    bookImageUrl: "",
    books: [],
    term: "",
    cartBooks: [],
    favBooks: []
  },
  mutations: {
    SET_BOOKS(state) {
      state.books = [];

      db.collection("books").onSnapshot(snapshot => {
        snapshot.forEach(book => {
          state.books.push({
            id: book.id,
            title: book.data().title,
            author: book.data().author,
            price: book.data().price,
            type: book.data().type,
            description: book.data().description,
            shortDescription: book.data().shortDescription,
            image: book.data().image
          });
        });
      });
    },
    SET_BOOK(state, book) {
      state.book = book;
    },
    SET_BOOK_URL(state, bookImageUrl) {
      state.bookImageUrl = bookImageUrl;
    },
    SET_TERM(state, term) {
      state.term = term;
    },
    ADD_CREATED_BOOK(state, book) {
      state.books.push(book);
    },
    ADD_TO_FAVS(state, book) {
      state.favBooks.push(book);
    },
    REMOVE_FROM_FAVS(state, book) {
      let target = state.favBooks.findIndex(favBook => book === favBook);
      state.favBooks.splice(target, 1);
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
    fetchBook({ state, commit }, bookId) {
      state.book = {};
      state.bookImageUrl = "";

      return db
        .collection("books")
        .doc(bookId)
        .get()
        .then(doc => {
          commit("SET_BOOK", doc.data());
        })
        .then(() => {
          firebase
            .storage()
            .ref("books")
            .child(`${state.book.image}`)
            .getDownloadURL()
            .then(bookUrl => commit("SET_BOOK_URL", bookUrl));
        })
        .catch(err => console.log("There is an error: ", err));
    },

    fetchBooks({ commit }) {
      commit("SET_BOOKS");
    },
    searchByTerm({ commit }, term) {
      commit("SET_TERM", term);
    },
    createBook({ commit }, book) {
      return db
        .collection("books")
        .add(book)
        .then(() => {
          commit("ADD_CREATED_BOOK");
        });
    },
    addToFavs({ commit }, book) {
      commit("ADD_TO_FAVS", book);
    },
    addToCart({ commit }, book) {
      commit("ADD_BOOK_TO_CART", book);
    },
    removeFromCart({ commit }, book) {
      commit("REMOVE_BOOK_FROM_CART", book);
    },
    removeFromFavs({ commit }, book) {
      commit("REMOVE_FROM_FAVS", book);
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
    }
  }
});
