<script setup lang="ts"></script>
<template>
  <!-- A basic anchor icon from Phosphor icons -->
  <div class="i-ph-anchor-simple-thin" />
  <!-- An orange alarm from Material Design Icons -->
  <div class="i-mdi-alarm text-orange-400 hover:text-teal-400" />
  <!-- A large Vue logo -->
  <div class="i-logos-vue text-3xl" />
  <!-- Sun in light mode, Moon in dark mode, from Carbon -->
  <button class="i-carbon-sun dark:i-carbon-moon" />
  <!-- Twemoji of laugh, turns to tear on hovering -->
  <div
    class="i-twemoji-grinning-face-with-smiling-eyes hover:i-twemoji-face-with-tears-of-joy"
  />
  <div
    text-5xl
    fw100
    animate-bounce-alt
    animate-count-infinite
    animate-duration-1s
  >
    UnoCSS
  </div>
  <div class="h-60px">
    <div float-left class="w m-1"></div>
    <div float-left class="w m-2"></div>
    <div float-left class="w m-3"></div>
    <div float-left class="w m-4"></div>
    <div float-left class="w m-5"></div>
    <div float-left class="w m-6"></div>
    <div float-left class="w m-7"></div>
    <div float-left class="w m-8"></div>
    <div float-left class="w m-9"></div>
    <div float-left class="w m-10"></div>
  </div>

  <div class="i-carbon-cics-db2-connection"></div>
</template>
<style lang="scss" scoped>
div.w {
  height: 50px;
  background-color: pink;
  margin: 5px;
  display: inline-block;
}
@for $i from 1 through 10 {
  .m-#{$i} {
    width: $i/4 + rem;
  }
}
</style>
