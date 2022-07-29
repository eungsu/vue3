<template>
    <div v-for="key in Object.keys(todos)" :key="key" class="mb-3">
        <div v-if="isShowDate">
            <em>{{ key }}</em>
        </div>
        <todo-list :todos="todos[key]" />
    </div>
</template>

<script setup>
import TodoList from './TodoList.vue';

const props = defineProps({
    todos: {
        type: Object,
        default: [],
    },
    isShowDate: {
        type: Boolean,
        default: false
    }
});
</script>

<style>
</style>