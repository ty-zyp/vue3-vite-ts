import { fileURLToPath, URL } from "node:url";
import path from "path";
import { defineConfig } from "vite";
// import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import ViteVUe from "@vitejs/plugin-vue";
import VitePages from "vite-plugin-pages";
import { resolve } from "path";
import fs from "fs-extra";
import matter from "gray-matter";

import Components from "unplugin-vue-components/vite";
// AntDesignVue 库
import {
  AntDesignVueResolver,
  ElementPlusResolver,
} from "unplugin-vue-components/resolvers";
import Layouts from "vite-plugin-vue-layouts";

import UnoCss from "unocss/vite";
import { presetUno, presetAttributify, presetIcons } from "unocss";
import Icons from "unplugin-icons/vite";
import IconsResolver from "unplugin-icons/resolver";
import AutoImport from "unplugin-auto-import/vite";
import vueI18n from "@intlify/vite-plugin-vue-i18n";
// import babel from "vite-babel-plugin";
// import Markdown from "vite-plugin-md";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    AutoImport({
      // resolvers: [ElementPlusResolver()],
      imports: [
        "vue",
        "pinia",
        "vue-router",
        "vue-i18n",
        "vue/macros",
        "@vueuse/head",
        "@vueuse/core",
      ],
      dts: "src/auto-imports.d.ts",
      dirs: ["src/composables", "src/stores"],
      vueTemplate: true,
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      extensions: ["vue", "md"],
      // allow auto import and register components used in markdown
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      dts: "src/components.d.ts",
      resolvers: [
        AntDesignVueResolver(),
        ElementPlusResolver(),
        IconsResolver({ prefix: "icon" }),
      ],
    }),
    // vue(),
    vueJsx(),
    // Markdown(),
    ViteVUe({ include: [/\.vue$/, /\.md$/] }),
    VitePages({
      extensions: ["vue", "md"], // 需要包含的文件类型
      pagesDir: "src/pages", // 寻找文件的目录，这里选择了项目根目录pages目录
      exclude: ["**/components/*.vue"], // 排除在外的目录，即不将所有components目录下的.vue文件生成路由。
      extendRoute(route) {
        // 提供一个方法，对每个文件产生路由做一些加工，这里是对route.meta的处理。
        const path = resolve(__dirname, route.component.slice(1));
        const md = fs.readFileSync(path, "utf-8");
        const { data } = matter(md); // gray-matter的功能，可以获取相关文件的front-matter,并将其处理为一个对象
        // front-matter: markdown文件顶部，由---包裹的一块区域，就像
        // ---
        // title:hello
        // date:2023-02-06
        // ---
        route.meta = Object.assign(route.meta || {}, { frontmatter: data });
        return route;
      },
    }),
    Layouts({
      layoutsDirs: "src/layouts",
      defaultLayout: "index",
    }),
    UnoCss({
      presets: [presetUno(), presetAttributify(), presetIcons()],
    }),
    Icons({
      compiler: "vue3",
      autoInstall: true,
    }),
    vueI18n({
      runtimeOnly: true,
      compositionOnly: true,
      fullInstall: true,
      include: [path.resolve(__dirname, "./src/lang/**")],
      // include: resolve(__dirname, "src/lang/**"),
    }),
    // babel()
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  css: {
    // css预处理器
    preprocessorOptions: {
      scss: {
        // 引入 mixin.scss 这样就可以在全局中使用 mixin.scss中预定义的变量了
        // 给导入的路径最后加上 ;
        additionalData: '@import "@/assets/style/mixin.scss";',
      },
    },
  },
});
