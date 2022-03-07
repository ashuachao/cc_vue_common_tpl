import { createApp } from "vue";
import "@/styles/common/reset.css";
import App from "@/App.vue";
const app = createApp(App);
// svg com register(vite's virtual import)
// maintain a hashmap to relate symbolId to svgMap
// composite the svgimg into dom
import "virtual:svg-icons-register";
// il8n register
import i18n from "@/helpers/lang";
app.use(i18n);
// router register
import router from "@/routers";
app.use(router);
// pinia register
const pinia = createPinia();
app.use(pinia);
// mount the app
app.mount("#app");
