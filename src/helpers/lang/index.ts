import { createI18n } from "vue-i18n";
import enLocale from "./en";
import cnLocale from "./zh";
import CONSTANT from "@/helpers/constant/constant.baseUrl";
const messages = {
    en: {
        ...enLocale,
    },
    zh: {
        ...cnLocale,
    },
};
export default createI18n({
    fallbackLocale: "ch",
    // inject to global
    globalInjection: true,
    legacy: false,
    // options: en | zh | es
    locale: localStorage.getItem("language") || CONSTANT.LANG,
    messages,
});
