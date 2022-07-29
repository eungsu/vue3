<script setup>
import { ref } from 'vue';

  const message = ref("");
</script>

<template>
  <div>
    <h1>사용자 입력처리</h1>
    <div>메세지 입력: <input type="text" v-model="message" /></div>
    <div>메세지 출력: {{ message }}</div>
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
