<!-- eslint-disable vue/multi-word-component-names -->
<style lang="scss" scoped>
.content-a {
  width: 100%;
  height: 100%;
  // background-color: red;
  display: flex;
  flex-flow: column nowrap;
  .title {
    height: 50px;
    flex: none;
    background-color: $color-green;
  }
  .body-content {
    flex: auto;
    // background: pink;
    display: flex;
    flex-flow: row nowrap;
    .side {
      // width: 300px;
      // background: gray;
      flex: none;
    }
    .main {
      flex: auto;
    }
  }
}
</style>
<script lang="ts" setup>
const { availableLocales, locale } = useI18n();
const toggleLocales = () => {
  const locales = availableLocales;
  locale.value = locales[(locales.indexOf(locale.value) + 1) % locales.length];
};
const router = useRouter();
const logOut = () => {
  router.push(`/login`);
};
</script>
<template>
  <div class="content-a">
    <div class="title">
      标题
      <el-button @click="logOut">退出登录</el-button>
      <el-button @click="toggleLocales">切换语言</el-button>
    </div>
    <div class="body-content">
      <div class="side">
        <Menu></Menu>
      </div>
      <div class="main">
        <RouterView />
      </div>
    </div>
  </div>
</template>
