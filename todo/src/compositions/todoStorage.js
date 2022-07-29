import { reactive, toRefs } from "vue";

export const todoStorage = () => {
    const KEY = 'my-todo-list';
    const storage = reactive({size:0});
    const loadTodos = (initTodos) => {
        let todos = JSON.parse(localStorage.getItem(KEY) || '[]');
        todos.forEach((todo, index) => todo.id = index);
        storage.size = todos.length;
        initTodos(todos);
    }
    const saveTodos = todos => localStorage.setItem(KEY, JSON.stringify(todos.value));
    
    return {
        ...toRefs(storage),
        loadTodos,
        saveTodos
    }
}