<script setup>
import { reactive, computed } from 'vue';

  const product = reactive({name:"", price:0});
  const products = reactive([
    {id: 1, name:"연필", price:500},
    {id: 2, name:"색연필", price:1500},
    {id: 3, name:"볼펜", price:1000},
    {id: 4, name:"공책", price:5000},
    {id: 5, name:"그림책", price:7000},
  ]);

  const lowPriceItems = computed(() => products.filter((item) => item.price < 5000))
  const highPriceItems = computed(() => products.filter((item) => item.price >= 5000))
  const addProduct = () => {
    let item = {...product};
    products.push(item);
    
    product.name = "";
    product.price = 0;
  }
</script>

<template>
  <h1>계산된 속성</h1>

  <form>
    제품명: <input type="text" v-model="product.name" />
    가격: <input type="number" v-model="product.price" step="1000"/>
    <button type="button" @click="addProduct">추가</button>
  </form>

  <h3>가격이 낮은 제품</h3>
  <ul>
    <li v-for="item in lowPriceItems" :key="item.id">{{ item.name }} {{ item.price }}</li>
  </ul>
  <h3>가격이 높은 제품</h3>
  <ul>
    <li v-for="item in highPriceItems" :key="item.id">{{ item.name }} {{ item.price }}</li>
  </ul>
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
