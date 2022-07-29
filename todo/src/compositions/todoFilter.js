import { inject } from 'vue';
import moment from 'moment/dist/moment.js'

/*
    할일을 필터핑하는 메소드를 제공하는 함수다.
*/
export const todoFilter = () => {
    // 오늘 날짜를 주입받는다.
    const today = inject('today');
    // 작업을 날짜순, 인덱스 순으로 정렬하는 함수다.
    const todoSort = (todo1, todo2) => {
        const dueDate1 = moment(todo1.dueDate);
        const dueDate2 = moment(todo2.dueDate);
        return dueDate1.unix() === dueDate2.unix() ? dueDate2.id - dueDate2.id : dueDate1.unix() - dueDate2.unix();
    }
    // 모든 작업을 반환한다.
    const getAllTodos = todos => todos.slice().sort(todoSort);
    // 완료처리된 모든 작업을 반환한다.
    const getAllCompletedTodos = todos => todos.filter(todo => todo.completed).slice().sort(todoSort);
    // 미완료처리된 모든 작업을 반환한다
    const getAllUncompletedTodos = todos => todos.filter(todo => !todo.completed).slice().sort(todoSort);
    // 처리날짜가 오늘로 지정된 모든 작업을 반환한다.
    const getAllTodayTodos = todos => todos.filter(todo => todo.dueDate === today).slice().sort(todoSort);
   // 처리날짜가 오늘로 지정된 모든 작업중에서 미처리된 작업을 반환한다.
    const getUncompletedTodayTodos = todos => todos.filter(todo => todo.dueDate === today && !todo.completed).slice().sort(todoSort);
   // 처리날짜가 오늘로 지정된 모든 작업중에서 처리완료된 작업을 반환한다.
    const getCompletedTodayTodos = todos => todos.filter(todo => todo.dueDate === today && todo.completed).slice().sort(todoSort);

    return {
        getAllTodos,                    // 모든 작업을 반환한다.
        getAllCompletedTodos,           // 오늘 기준으로 완료처리된 모든 작업을 반환한다
        getAllUncompletedTodos,         // 오늘 기준으로 완료처리된 모든 작업을 반환한다
        getAllTodayTodos,               // 처리날짜가 오늘로 지정된 모든 작업을 반환한다.
        getUncompletedTodayTodos,       // 처리날짜가 오늘로 지정된 모든 작업중에서 미처리된 작업을 반환한다.
        getCompletedTodayTodos          // 처리날짜가 오늘로 지정된 모든 작업중에서 처리완료된 작업을 반환한다.
    };
}