import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home";
import ProductShow from "@/views/ProductShow";
import ShoppingCart from "@/views/ShoppingCart";
import UserFavorites from "@/views/UserFavorites";
import ProductCreate from "@/views/ProductCreate";
import Login from "@/views/Login";
import Register from "@/views/Register";
import firebase from "firebase";

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/product-info/:id",
      name: "product-info",
      component: ProductShow,
      props: true
    },
    {
      path: "/product-create",
      name: "product-create",
      component: ProductCreate,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/cart",
      name: "cart",
      component: ShoppingCart
    },
    {
      path: "/favs",
      name: "favs",
      component: UserFavorites
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/register",
      name: "register",
      component: Register
    }
  ]
});

router.beforeEach((to, from, next) => {
  const currentUser = !!firebase.auth().currentUser;
  console.log("currentUser: ", currentUser);

  if (to.matched.some(record => record.meta.requiresAuth) && !currentUser) {
    next("/login");
  }
  next();
});

export default router;
