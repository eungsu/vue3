<script setup>
import { reactive, ref } from 'vue';
  const counter = ref(0);
  const items = reactive(["아이폰", "맥북", "애플워치", "아이패드"]);
  const name = ref("");
  const increaseCounter = () => counter.value++;
  const addItem = () => {
    let itemName = name.value;
    items.push(itemName);
    name.value = "";
  }
</script>

<template>
  <div>
    <h1>조건문과 반복문</h1>

    <h3>조건문</h3>
    <p v-if="counter >= 5">숫자가 5보가 크거나 같습니다.</p>
    <p v-else>숫자가 5보다 작습니다.</p>
    <button @click="increaseCounter">클릭하면 숫자가 올라갑니다 {{ counter }}</button>

    <h3>반복문</h3>
    <ul>
      <li v-for="(item, index) in items" :key="index">{{ item }}</li>
    </ul>
    <form>
      상품명 : <input type="text" v-model="name" /><button type="button" @click="addItem">추가</button>
    </form>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
