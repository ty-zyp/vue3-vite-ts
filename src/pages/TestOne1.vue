<template>
  <h2>testOne1</h2>
  <button @click="modify">修改pania数据 {{ store.count }}</button>
  <p>
    information store数据{{ name }}{{ age }}-{{ information.age }}-{{ sex }}
    {{ address }}-【{{ information.getAllInformation }}】-{{ arr }}
  </p>
  <div>hello test子组件1-{{ fullName }}</div>
  <input type="text" v-model="firstName" />
  <input type="text" v-model="lastName" />
  <input type="text" v-model="fullName" />
</template>
<script lang="ts" setup>
import { ref, toRefs, computed } from "vue";
// import { storeToRefs } from "pinia";
import { useCounterStore, informationStroe } from "../stores/counter";
const store = useCounterStore();
console.log(store, store.count);
console.log(store.doubleCount);
console.log(store.increment);

const information = informationStroe();

// let { name, age, sex, address, arr } = information; // 没有响应式
// let { name, age, sex, address, arr } = storeToRefs(information); // 响应式1
let { name, age, sex, address, arr } = toRefs(information); // 响应式2

console.log("----------", name, age, sex, address, arr);
const modify = () => {
  console.log("修改");
  store.increment();
  information.toArr({ a: 1, b: 2 }); // 修改方式一  调用action里面方法全局改
  information.age++; // 修改方式一 ：全局修改
  // information.$patch((state) => { // 全局修改多个变量
  //   state.age++;
  // });
  information.getTimeoutFun(); // 调用异步方法
};

// 从参数中推导类型
// const props = defineProps({
//   name: { type: String, require: true },
//   age: Number,
// });

// 通过泛型参数来定义
// const props = defineProps<{
//   name: string;
//   age?: number;
// }>();

// 泛型参数定义成一个单独的 interface
// interface Props {
//   name: string;
//   age?: number;
// }
// const { name = "ty", age = 20 } = defineProps<Props>();

const firstName = ref("ty");
const lastName = ref("zyp");
const fullName = computed({
  get() {
    return firstName.value + " " + lastName.value;
  },
  set(newValue) {
    [firstName.value, lastName.value] = (newValue as string).split(" ");
  },
});
</script>
