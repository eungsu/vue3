<script setup>
  const name = "홍길동";
  const tel = "010-1234-5678";
  const email = "hong@gmail.com"
</script>

<template>
  <div>
    <h1>선언적 렌더링</h1>
    <h3>사용자 정보</h3>
    <dl>
      <dt>이름</dt><dd>{{ name }}</dd>
      <dt>전화번호</dt><dd>{{ tel }}</dd>
      <dt>이메일</dt><dd>{{ email }}</dd>
    </dl>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
