import { createApp } from "vue";
import { ComponentLibrary } from "@common-components/vue";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(router, ComponentLibrary);

app.mount("#app");
