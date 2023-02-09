<template>
  <div>
    <h2>testOne2</h2>
    <p>store count数据：{{ store.count }}</p>
    <p>
      store information数据：{{ name }}-{{ age }}-{{ information.age }}-{{
        sex
      }}-{{ address }}-{{ arr }}
    </p>
  </div>
</template>
<script setup lang="ts">
// import { ref } from "vue";
import { useCounterStore, informationStroe } from "../stores/counter";

const store = useCounterStore();
const information = informationStroe();
console.log("2:", information);
// const name = ref<string>(information.name);
// const age = ref<number>(information.age);
// const sex = ref<string>(information.sex);
// const address = ref<string>(information.address);
const { name, age, sex, address, arr } = information;
</script>
