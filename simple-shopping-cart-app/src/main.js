import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import firebase from "firebase/app";
import upperFirst from "lodash/upperFirst";
import camelCase from "lodash/camelCase";
import Vuelidate from "vuelidate";

Vue.use(Vuelidate);

const requireComponent = require.context(
  "./components/base",
  true,
  /Base[A-Z]\w+\.(vue|js)$/
);

requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName);

  const componentName = upperFirst(
    camelCase(
      fileName
        .split("/")
        .pop()
        .replace(/\.\w+$/, "")
    )
  );

  Vue.component(componentName, componentConfig.default || componentConfig);
});

Vue.config.productionTip = false;

const firebaseConfig = {
  apiKey: "AIzaSyDdrV2GtOZrMQU0E6B5MOHA8zBzrNRQ5k8",
  authDomain: "shopping-cart-app-839d6.firebaseapp.com",
  databaseURL: "https://shopping-cart-app-839d6.firebaseio.com",
  projectId: "shopping-cart-app-839d6",
  storageBucket: "shopping-cart-app-839d6.appspot.com",
  messagingSenderId: "296033088567",
  appId: "1:296033088567:web:9046db2236da052f497bb2"
};

firebase.initializeApp(firebaseConfig);

let app;
firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      store,
      router,
      render: h => h(App)
    }).$mount("#app");
  }
});

// new Vue({
//   store,
//   router,
//   render: h => h(App)
// }).$mount("#app");
