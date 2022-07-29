<template>
    <todo-form />
    <todo-main />
</template>

<script setup>
import { inject, provide, readonly, ref } from 'vue';

import { todoStorage } from '../compositions/todoStorage';
import TodoForm from './TodoForm.vue';
import TodoMain from './TodoMain.vue';

const today = inject('today');

const todos = ref([]);
provide('todos', readonly(todos));

const initTodos = items => todos.value = items;
const { loadTodos, saveTodos, size } = todoStorage();

const addTodo = (job, dueDate) => {
    todos.value.push({
        id: size.value++,
        job: job,
        dueDate: dueDate,
        completedDate: null,
        completed: false
    });
    saveTodos(todos);
}
const removeTodo = id => {
    todos.value.splice(id, 1);
    todos.value.forEach((todo, index) => todo.id = index);
    saveTodos(todos);
}
const completeTodo = id => {
    let selectedTodo = todos.value.find(todo => todo.id === id);
    selectedTodo.completedDate = today;
    selectedTodo.completed = true;
    saveTodos(todos);
}

provide('addTodo', addTodo);
provide('removeTodo', removeTodo);
provide('completeTodo', completeTodo);

loadTodos(initTodos);
</script>