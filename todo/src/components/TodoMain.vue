<template>
    <todo-menu @change-filter="onChangeFilter" class="p-0" />
    <todo-group :todos="filteredTodos" :isShowDate="isShowDate"/>    
</template>

<script setup>
import { inject, provide, ref, watch } from 'vue';
import { todoFilter } from '../compositions/todoFilter';

import TodoMenu from './TodoMenu.vue';
import TodoGroup from './TodoGroup.vue';

const {
    getAllTodos,                    // 모든 작업을 반환한다.
    getAllCompletedTodos,           // 오늘 기준으로 완료처리된 모든 작업을 반환한다
    getAllUncompletedTodos,         // 오늘 기준으로 완료처리된 모든 작업을 반환한다
    getAllTodayTodos,               // 처리날짜가 오늘로 지정된 모든 작업을 반환한다.
    getUncompletedTodayTodos,       // 처리날짜가 오늘로 지정된 모든 작업중에서 미처리된 작업을 반환한다.
    getCompletedTodayTodos          // 처리날짜가 오늘로 지정된 모든 작업중에서 처리완료된 작업을 반환한다.
} = todoFilter();

const filterKey = ref(0);
const filters = {
    0: {label: '오늘 작업', filtering: getAllTodayTodos, showDate: false},
    1: {label: '오늘 작업(미완료 작업)', filtering: getUncompletedTodayTodos, showDate: false},
    2: {label: '오늘 작업(완료된 작업)', filtering: getCompletedTodayTodos, showDate: false},
    3: {label: '모든 작업들', filtering: getAllTodos, showDate: true},
    4: {label: '모든 작업들(미완료 작업)', filtering: getAllUncompletedTodos, showDate: true},
    5: {label: '모든 작업들(완료된 작업)', filtering: getAllCompletedTodos, showDate: true}
}
provide('filters', filters);

const onChangeFilter = filterIndex => filterKey.value = Number(filterIndex);

const filteredTodos = ref([]);
const isShowDate = ref(false);
const originalTodos = inject('todos');

const groupTodosByDate = todos => {
    return todos.reduce((result, todo) => {
        result[todo.dueDate] = result[todo.dueDate] || [];
        result[todo.dueDate].push(todo);
        return result;
    }, {})
}

watch([() => filterKey.value, originalTodos.value], (([selectedFilter, todos]) => {
    let tempTodos = filters[selectedFilter].filtering(todos);
    filteredTodos.value = groupTodosByDate(tempTodos);
    isShowDate.value = filters[selectedFilter].showDate;
}), {immediate: true});

</script>
