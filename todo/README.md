# Todo Application

- Vue 3 + Vite를 이용한 Todo Application이다.

## 컴포넌트 구성

컴포넌트 | 설명 |
---|---|
main.js | |
App.vue | 애플리케이션을 구성하는 최상위 컴포넌트다. TodoHeader.vue와 TodoContainer.vue를 포함한다. |
TodoHeader.vue | 애플리케이션명과 오늘 날짜를 출력한다. |
TodoContainer.vue | Todo 애플리케이션의 컨테이너 컴포넌트다. TodoForm.vue와 TodoMain.vue를 포함한다. |
TodoForm.vue | 새로운 Todo를 입력하는 UI 컴포넌트다. |
TodoMain.vue | Todo 목록을 관리하고, 필터링된 Todo 목록을 TodoGroup 컴포넌트에 전달한다. TodoMenu.vue와 TodoGroup.vue를 포함한다. |
TodoMenu.vue | Todo 목록을 필터링 할 수 있는 메뉴를 제공하는 컴포넌트다. |
TodoGroup.vue | 필터링된 Todo 목록을 전달받아서 출력하는 컴포넌트다. 전체 목록을 필터링해서 출력할 때는 날짜별로 그룹핑해서 출력한다. |
TodoList.vue | Todo 목록을 전달받아서 출력한다. |
