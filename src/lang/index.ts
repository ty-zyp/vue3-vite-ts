import { createI18n } from "vue-i18n";

// const { availableLocales, locale } = useI18n()
// const toggleLocales = () => {
//   const locales = availableLocales
//   locale.value = locales[(locales.indexOf(locale.value) + 1) % locales.length]
// }

// import { createPinia } from "pinia";
// import language.setLanguage() from "@store/settings";

// import { languageStore } from "../stores/counter";
// const language = languageStore();
// console.log("lang", language);
import cn from "./cn";
import en from "./en";
const messages = {
  cn,
  en,
};

const i18n: any = createI18n({
  legacy: false, // 使用 Composition API 模式，则需要将其设置为false
  globalInjection: true, //全局生效$t
  locale: "en", //language.lang, // 默认cn翻译
  messages, //ES6解构
});
export default i18n;
