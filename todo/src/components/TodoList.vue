<template>
<main>
    <div v-for="(todo, index) in todos" :key="todo.id">
        <div class="input-group my-2 input-group-sm">
            <div class="input-group-text">
                <input type="checkbox" 
                    class="form-check-input mt-0"
                    :checked="todo.completed"
                    :disabled="todo.completed"
                    @click="completeTodo(todo.id)" />
            </div>
            <div class="input-group-text">
                <input type="date" 
                    class="form-input mt-0"
                    :min="today"
                    disabled
                    :value="todo.dueDate" />
            </div>
            <input type="text"
                class="form-control" :value="todo.job" />
            <button type="button"
                class="btn btn-outline-primary dropdown-toggle"
                data-bs-toggle="dropdown">
                할일 관리
            </button>
            <ul class="dropdown-menu dropdown-menu-end">
                <li v-for="(menuItem, index) in menuItems" :key="index">
                    <a class="dropdown-item" @click="menuItem.job(todo.id)">{{ menuItem.name }}</a>
                </li>
            </ul>
        </div>
        <div v-show="index + 1 < todos.length" class="col border border-second"></div>
    </div>
</main>
</template>

<script setup>
import { inject } from 'vue';

const props = defineProps({
    todos: {
        type: Array,
        default: [],
    }
});

const removeTodo = inject('removeTodo');
const completeTodo = inject('completeTodo');
const today = inject('today');

const menuItems = [
    {
        name: '삭제',
        job: removeTodo
    },
    {
        name: '완료',
        job: completeTodo
    }
]
</script>