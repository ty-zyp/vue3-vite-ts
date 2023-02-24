import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
// import router from "./router";

// import routes from "pages-generated";
import {
  createRouter,
  createWebHistory,
  // createWebHashHistory,
} from "vue-router";
import { setupLayouts } from "virtual:generated-layouts";
import generatedRoutes from "virtual:generated-pages";

import "./assets/main.css";
import "uno.css";
import i18n from "./lang/index";
const app = createApp(App);
const routes = setupLayouts(generatedRoutes);
app.use(createPinia());
app.use(i18n);
// app.use(router);
app.use(
  createRouter({
    history: createWebHistory(),
    // history: createWebHashHistory(),
    routes,
  })
);

app.mount("#app");
