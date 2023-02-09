<script setup lang="ts">
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>
<template>
  <div class="ab">
    ab
    <div class="ac">ac</div>
  </div>
  <hr />

  <!-- //使用  $t -->
  <span> {{ $t("home.title", { a: "123", b: "456" }) }} </span>
  <!-- //使用 t （要解构） -->
  <p>{{ t("home.title") }}</p>
  <p>{{ t("home.hint", ["aa", "bb"]) }}</p>
  <p>{{ t("home.guessYouLike", ["aa", "bb", "cc"]) }}</p>

  <!-- //使用v-t , 这个数据是没有的，只是用来展示如何使用v-t -->
  <p v-t="{ path: 'home.title', args: { count: 10 } }"></p>

  <!-- //使用翻译组件
  // keypath:必传,和上面path参数一样   tag:可选，转为什么标签
  // locale:可选，要用哪个语言环境    scope：可选，全局还是局部 `global` or `parent`
  //  i18n:可选，优先级比scope高，参数也多，用的也不多，就不介绍了 -->
  <i18n-t keypath="home.title" tag="p" locale="cn" scope="global"></i18n-t>
</template>
<style scoped lang="scss">
.ab {
  color: blue;
  font-size: 30px;
  .ac {
    color: orange;
    font-size: 50px;
  }
}
</style>
