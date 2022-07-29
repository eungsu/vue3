<template>
    <div class="row mb-3">
        <div class="col">
            <form class="border bg-light p-3">
                <input type="text"
                    id="todo-input"
                    class="form-control my-2"
                    v-model="job"
                    placeholder="여기에 할 일을 입력하세요." />
                <div class="d-flex justify-content-between">
                    <input type="date"
                        class="form-control w-25"
                        v-model="date"
                        :min="today" />
                    <button type="button" 
                        class="btn btn-primary btn-sm"
                        @click="onAddTodo">작업추가</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>
import moment from 'moment/dist/moment.js'

import { inject, reactive, toRefs, ref } from 'vue';

const today = inject('today');
const date = ref(moment().format('YYYY-MM-DD'));
const addTodo = inject('addTodo');
const todo = reactive({
    job: '',
    dueDate: date,
    today: today
});

const onAddTodo = () => {
    if (todo.job.length) {
        addTodo(todo.job, todo.dueDate);
        todo.job = '';
        todo.dueDate = today;
    }
}

const {job, dueDate} = toRefs(todo);
</script>

<style>
</style>