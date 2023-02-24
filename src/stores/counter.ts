// import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const languageStore = defineStore("language", () => {
  const lang = ref("cn");
  function setLanguage(val: string) {
    lang.value = val;
  }
  return { lang, setLanguage };
});
export const useCounterStore = defineStore("counter", () => {
  const count = ref(1);
  const doubleCount = computed(() => count.value * 2);
  function increment() {
    count.value++;
  }

  return { count, doubleCount, increment };
});

export const informationStroe = defineStore("information", {
  state: () => {
    return {
      name: "ty",
      age: 30,
      sex: "男",
      address: "龙华",
      arr: [] as object[],
    };
  },
  getters: {
    getNullName(state) {
      return "你好 " + state.name;
    },
    getAllInformation(state) {
      return `我叫${state.name},年龄${state.age}岁，性别是${state.sex},住在${state.address}`;
    },
  },
  actions: {
    toArr(obj: object) {
      this.arr.push(obj);
    },
    getTimeoutFun() {
      setTimeout(() => {
        this.age = this.age + 5;
        console.log("***:", this.age);
      }, 1000);
    },
  },
});
