// 1st step is to import our compoents in this route file

import Home from "./components/Home.vue";
import SignUp from "./components/SignUp.vue";
// Next step is to import our router package and in that we use createRouter and createWebHistory
import { createRouter, createWebHistory } from "vue-router";

// Next we define our routes in array of objects

const routes = [
  {
    name: "Home",
    path: "/",
    component: Home,
  },
  {
    name: "SignUp",
    path: "/sign-up",
    component: SignUp,
  },
];

// Next is write configuaration for createRouter and createWebHistory

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

// Now to make router work..we export it in the main.js file(Pls check main.js file)

// After importing the router in main.js..remove the componets which you had imported in App.vue file...and inside the template add <router-view />
