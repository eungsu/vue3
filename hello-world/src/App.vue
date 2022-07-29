<!-- 
  싱글파일 컴포넌트(SFC: Single-File Component)다. 
    - SFC는 .vue 확장자를 가진다
    - 구성
      - <template>
        * 컴포넌트가 랜더링되어야 하는 HTML이다.
        * 선언적 렌더링 혹은 템플릿 문법을 이용하여 반응형 컴포넌를 생성한다.
      - <script>
        * 템플릿에서 사용한 반응성을 가지는 변수 등을 조작한다. 
        * 자바스크립트나 타입스크립트를 이용해 스크립트 코드를 작성한다.
      - <style> 
        * 컴포넌트 혹은 전체 프로젝트에 적용할 CSS를 작성한다.
        * scoped는 CSS가 이 컴포넌트에만 적용되게 한다.   
 -->
<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <HelloWorld msg="안녕하세요" />
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
