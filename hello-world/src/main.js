// vue 모듈로부터 createApp 함수를 import한다.
import { createApp } from 'vue'
// App.vue 모듈로부터 App 컴포넌트를 import한다.
import App from './App.vue'

// createApp() 함수는 애플리케이션 인스턴스를 생성하는 함수다.
// mount('#app')는 id값이 app인 태그에 생성된 애플리케이션 인스턴스를 마운트 시킨다.
createApp(App).mount('#app')
