import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home";
import ProductShow from "@/views/ProductShow";
import ShoppingCart from "@/views/ShoppingCart";
import UserFavorites from "@/views/UserFavorites";
import ProductCreate from "@/views/ProductCreate";
import Login from "@/views/Login";

Vue.use(Router);

export default new Router({
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
      component: ProductCreate
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
    }
  ]
});
