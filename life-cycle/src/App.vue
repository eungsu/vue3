<script setup>
import { onBeforeMount, onBeforeUpdate, onMounted, onUpdated, ref } from 'vue';

const count = ref(0)

onBeforeMount(() => console.log("onBeforeMount"));
onMounted(() => console.log("onMounted"));
onBeforeUpdate(() => console.log("onBeforeUpdate"));
onUpdated(() => console.log("onUpdated"));
</script>

<template>
  <button type="button" @click="count++">count is: {{ count }}</button>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
