import { createI18n } from "vue-i18n";
// import { createPinia } from "pinia";
// import SettingsStore from "@store/settings";

import cn from "./cn";
import en from "./en";
const messages = {
  cn,
  en,
};

const i18n: any = createI18n({
  legacy: false, // 使用 Composition API 模式，则需要将其设置为false
  globalInjection: true, //全局生效$t
  locale: "cn", // 默认cn翻译
  messages, //ES6解构
});
export default i18n;
