<script setup scoped>
import { useRouter } from "vue-router";
const router = useRouter();
const toDetail = () => {
  const id = "abc";
  router.push(`/hi/${encodeURIComponent(id)}`);
};
</script>
<template>
  <div class="text-25px text-#ff6700 bg-#ccc">你好Unocss</div>
  <div class="i-octicon-alert w-50px h-50px"></div>
  <div class="i-logos-atomic-icon w-50px h-50px"></div>
  <div class="i-octicon-database w-50px h-50px"></div>
  <div class="i-octicon-codespaces-16 w-50px h-50px"></div>
  <div>hello aA</div>
  <el-button type="primary" @click="toDetail"> 跳转到详情页面 </el-button>
  <TestOne1></TestOne1>
</template>
