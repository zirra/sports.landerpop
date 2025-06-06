import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import app from './libs/mixins/app.mixin'

createApp(App)
  .mixin({mixins: [app]})
  .use(store)
  .use(router)
  .mount('#app')
