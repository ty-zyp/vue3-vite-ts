<template>
  <div>
    <div>hello:{{ ss }}-{{ obj }}-{{ ty }}-{{ tsy }}-{{ user }}</div>
    <button @click="add">加加</button>
    <button @click="minus">减减</button>
    <hr />
    <!-- <TestOne1 :age="20" /> -->
    <!-- <TestOne2 /> -->
  </div>
</template>
<!-- <script lang="ts">
import { ref, reactive, defineComponent, watch } from "vue";
import TestOne1 from "../components/TestOne1.vue";
export default defineComponent({
  components: { TestOne1 },
  setup() {
    const ss = ref(0);
    console.log(ss);
    const obj = reactive({ a: 1, b: ss });
    watch(
      ss,
      (newV, oldV) => {
        console.log("ss发生了变化，最新值是：", newV, oldV);
      },
      {
        immediate: false, // 初始化的时候就会执行一次回调函数
        deep: false, // 深度监听对象的变化
        // pre=回调函数在渲染前调用；post=回调函数在渲染后调用；sync=回调将被同步调用，慎用！可能会阻塞页面渲染
        // flush: "pre" | "post" | "sync",
      }
    );
    return { ss, obj };
  },
  methods: {
    add() {
      this.ss = this.ss + 1;
    },
    minus() {
      --this.ss;
    },
  },
});
</script> -->

<script setup lang="ts">
// import TestOne1 from "../pages/TestOne1.vue";
// import TestOne2 from "../pages/TestOne2.vue";
// import { ref, reactive, computed, watch } from "vue";
// import type { Ref } from "vue";
// 为ref标注类型（3种）
// 1
const ss = ref<number>(1);
// 2
interface User {
  name: string;
  age: string | number;
  ss?: number | string | object;
}
const ty = ref<User>({
  name: "前端工程师",
  age: "30",
});
// 3 不推荐使用
const tsy: Ref<string | number> = ref("200");

// reactive标注类型2种方式
// 方式1
const obj: User = reactive({ name: "1", age: 20, ss: ss });
// 方式2
// const obj = reactive<User>({ name: "1", age: 20, ss: ss });
const add = () => {
  ss.value = ss.value + 1;
};
const minus = () => {
  ss.value = --ss.value;
};
const user = computed<string>(() => ss.value + "前端爱好者");
watch(
  ss,
  (newV, oldV) => {
    console.log("ss发生了变化，最新值是：", newV, oldV);
  },
  {
    immediate: false, // 初始化的时候就会执行一次回调函数
    deep: false, // 深度监听对象的变化
    // pre=回调函数在渲染前调用；post=回调函数在渲染后调用；sync=回调将被同步调用，慎用！可能会阻塞页面渲染
    // flush: "pre" | "post" | "sync",
  }
);
</script>
