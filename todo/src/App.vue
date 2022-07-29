<template>
    <header class="container my-3">
        <todo-header />
        <todo-container />
    </header>
</template>

<script setup>
import { inject } from 'vue';
import TodoHeader from './components/TodoHeader.vue';
import TodoContainer from './components/TodoContainer.vue';

const today = inject('today');
</script>

<style>
</style>

