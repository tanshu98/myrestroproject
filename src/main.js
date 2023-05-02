import { createApp } from "vue";
import App from "./App.vue";
// Now to use router..we import it here :)
import router from "./routes";
createApp(App).use(router).mount("#app");
