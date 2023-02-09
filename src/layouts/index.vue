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
const router = useRouter();
const logOut = () => {
  router.push(`/login`);
};
</script>
<template>
  <div class="content-a">
    <div class="title">
      标题
      <Button @click="logOut">退出登录</Button>
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
