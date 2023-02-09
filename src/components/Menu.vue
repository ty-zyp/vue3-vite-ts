<script setup lang="ts">
import { ref } from "vue";
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from "@element-plus/icons-vue";

// const { t } = useI18n();
const route = useRoute();
console.log("---", route.fullPath);
const state = reactive({
  path: "/" + route.fullPath.split("/")[1],
});

const isCollapse = ref(true);
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
</script>

<template>
  <div class="handle-btn text-#ff6700">
    <span @click="isCollapse = !isCollapse">{{
      isCollapse ? "展开" : "收起"
    }}</span>
    <span class="i-octicon-chevron-right-16" v-show="isCollapse"></span>
    <span class="i-octicon-chevron-left-16" v-show="!isCollapse"></span>
  </div>
  <el-menu
    default-active="2"
    router
    class="el-menu-vertical-demo"
    :collapse="isCollapse"
    :default-active="state.path"
    @open="handleOpen"
    @close="handleClose"
  >
    <el-sub-menu index="1">
      <template #title>
        <el-icon><location /></el-icon>
        <span>Navigator One</span>
      </template>
      <el-menu-item-group>
        <template #title><span>Group One</span></template>
        <el-menu-item index="/aa">aa页面</el-menu-item>
        <el-menu-item index="/ab">ab页面</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="Group Two">
        <el-menu-item index="testone1">testone1</el-menu-item>
        <el-menu-item index="testone2">testone2</el-menu-item>
      </el-menu-item-group>
      <el-sub-menu index="1-4">
        <template #title><span>item four</span></template>
        <el-menu-item index="1-4-1">item one</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
    <el-menu-item index="2">
      <el-icon><icon-menu /></el-icon>
      <template #title>Navigator Two</template>
    </el-menu-item>
    <el-menu-item index="3" disabled>
      <el-icon><document /></el-icon>
      <template #title>Navigator Three</template>
    </el-menu-item>
    <el-menu-item index="4">
      <el-icon><setting /></el-icon>
      <template #title>Navigator Four</template>
    </el-menu-item>
  </el-menu>
</template>
<style lang="scss" scoped>
.handle-btn {
  text-align: right;
  margin-top: 10px;
  margin-right: 6px;
  span {
    padding: 5px;
    cursor: pointer;
  }
}
</style>
<style lang="scss">
.side {
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    height: calc(100% - 60px);
  }

  .el-menu {
    height: calc(100% - 60px);
  }
}
</style>
