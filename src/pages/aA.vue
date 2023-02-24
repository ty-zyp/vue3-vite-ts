<script setup scoped>
import { useRouter } from "vue-router";
const router = useRouter();
const toDetail = () => {
  const id = "abc";
  router.push(`/hi/${encodeURIComponent(id)}`);
};

const eventName = ref("click");
const doSomething = () => {
  console.log("我执行了。。。");
};
// const value = ref("");

// let state = shallowReactive({
let state = reactive({
  foo: 1,
  nested: {
    bar: 2,
  },
});
console.log(0, isReactive(state));
console.log(1, isReactive(state.foo));
console.log(2, isReactive(state.nested.bar));
const a1 = (a, b) => {
  console.log(state, a, b);
  // state = shallowReactive({ foo: 11, nested: { bar: 22 } });
  // state = reactive({ foo: 11, nested: { bar: 22 } });
  state.foo = 11;
  state.nested.bar = 22;
  console.log(state);
};
const a2 = (a, b) => {
  console.log(a, b);
  ++state.foo;
};
const a3 = () => {
  ++state.nested.bar;
};
const a4 = () => {
  console.log("触发enter事件");
};
const options = [
  {
    value: "click",
    label: "click",
  },
  {
    value: "focus",
    label: "focus",
  },
  {
    value: "mouseenter",
    label: "mouseenter",
  },
  {
    value: "mouseleave",
    label: "mouseleave",
  },
];
</script>
<template>
  <div>
    <div class="text-25px text-#ff6700 bg-#ccc">你好Unocss</div>
    <div class="i-octicon-alert w-50px h-50px"></div>
    <div class="i-logos-atomic-icon w-50px h-50px"></div>
    <div class="i-octicon-database w-50px h-50px"></div>
    <div class="i-octicon-codespaces-16 w-50px h-50px"></div>
    <div>hello aA</div>
    <el-button color="#626aef" class="ml-200px">
      <el-icon i-octicon-arrow-down-16 />Download
      <!-- <el-icon><Download /></el-icon> -->
    </el-button>
    <el-button type="primary" @click="toDetail"> 跳转到详情页面 </el-button>
    <div i-octicon-codespaces-16 h-50px class="w-50px text-#ff6700">11111</div>
    <!-- <TestOne1></TestOne1> -->
  </div>
  <hr />
  <div>
    <el-select
      v-model="eventName"
      class="m-2"
      placeholder="Select"
      size="large"
    >
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </el-select>
    <a @[eventName]="doSomething"> 按钮 </a>
  </div>
  <div>
    <el-button type="primary" @click="a1('aaa', $event)">改对象</el-button>
    <el-button
      type="primary"
      @click="
        (event) => {
          a2('bbb', event);
        }
      "
      >改foo</el-button
    >
    <el-button type="primary" @keyup.page-down="a3">改bar</el-button>
    <el-button type="primary" @keyup.enter="a4">改bar</el-button>
    state: {{ state.foo }} state.nexted:{{ state.nested.bar }} state对象{{
      state
    }}

    <div
      style="width: 100px; height: 100px; background: pink"
      @keyup.enter="a4"
    ></div>
  </div>
</template>
