<script setup lang="ts">
// 1、坐标位置
const { x, y } = useMouse({
  type: "client", // 鼠标监听的位置是页面还是浏览器，默认页面  page|client
  touch: false, // 监听touchmove事件，用于移动端 默认true
  resetOnTouchEnds: false, // 触发touchend事件时重置为初始值，默认false
  initialValue: {
    // 可以设置初始值
    x: 100,
    y: 200,
  },
});
console.log(x, y);

// 2、计数器
const { count, inc, dec, set, reset } = useCounter(1);

// 3、本地存储 默认localStorage
const state = useLocalStorage("my-lol", {
  name: "ty",
  type: "职员1",
  camp: "aaaa",
});
// 使用sessionStorage
// const id = useStorage('my-id', 'some-string-id', sessionStorage)
const handleLocalStorage = () => {
  state.value = {
    name: "zyp",
    type: "职员2",
    camp: "bbbb",
  };
};
const handleReset = () => {
  state.value = null;
};

// 4、防抖 点击多次，在一定时间内只执行最后一次
const counter = ref(0);
const debouncedFn = useDebounceFn(
  () => {
    counter.value += 1;
  },
  1000,
  { maxWait: 5000 }
);
const clickedFn = () => {
  debouncedFn();
};

// 5、设置网页title
const name = ref("Hello");
const title = computed(() => {
  return `${name.value} -- Hello`;
});
useTitle(title);
name.value = "Hi";

// 6、全屏
const testRef = ref();
const { isFullscreen, toggle, enter, exit } = useFullscreen(testRef);

// 7、日期对象
const formatted = useDateFormat(useNow(), "YYYY-MM-DD HH:mm:ss");

// 8、dom元素 resize监听
const textRef = ref();
const text = ref<string>("");

useResizeObserver(textRef, ([entry]: any[]) => {
  const { height, width } = entry.contentRect;
  text.value = `${width};${height}`;
});
</script>
<template>
  <div>
    <h3>坐标：</h3>
    <div mt-1>x:{{ x }}</div>
    <div>y:{{ y }}</div>
  </div>
  <div>
    <h3>计数：{{ count }}</h3>
    <button @click="inc()">Increment</button>
    <button @click="dec()">Decrement</button>
    <button @click="inc(5.5)">Increment (+5.5)</button>
    <button @click="dec(5)">Decrement (-5)</button>
    <button @click="set(100)">Set (100)</button>
    <button @click="reset()">Reset</button>
  </div>
  <div>
    <h3>存储</h3>
    <p>名称：{{ state?.name }}-{{ state?.type }}-{{ state?.camp }}</p>
    <el-button type="primary" @click="handleLocalStorage">UseLocalStorage</el-button>
    <el-button type="primary" @click="handleReset">Reset</el-button>
  </div>
  <div>
    <h3>防抖{{ counter }}</h3>
    <el-button type="primary" @click="clickedFn">按钮</el-button>
  </div>
  <div>
    <h3>title {{ title }}</h3>
    <input type="text" v-model="name" />
  </div>
  <div>
    <div class="test" ref="testRef">
      全屏测试{{ isFullscreen }}
      <span m-5px @click="toggle" cursor-pointer>全屏toggle</span>
      <span m-5px @click="enter" cursor-pointer>全屏enter</span>
      <span m-5px @click="exit" cursor-pointer>全屏exit</span>
    </div>
  </div>
  <div>
    <h3>日期对象 {{ formatted }}</h3>
  </div>
  <div>
    <textarea ref="textRef" v-model="text"></textarea>
  </div>
</template>
<style lang="scss" scoped></style>
