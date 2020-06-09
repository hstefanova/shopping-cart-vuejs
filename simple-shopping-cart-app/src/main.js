import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
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

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");
