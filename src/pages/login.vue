<template>
  <div>登录页面</div>
  <Button type="primary" @click="login">登录</Button>
</template>
<route lang="yaml">
meta:
  layout: login
</route>
<script setup lang="ts">
const router = useRouter();
const login = () => {
  router.push(`/`);
};
</script>
<style lang="scss" scoped></style>
