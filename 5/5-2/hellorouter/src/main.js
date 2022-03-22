import { createApp } from 'vue'
import App from './App.vue'

// how to use router
import router from './router'

createApp(App).use(router).mount('#app')

// let app = createApp(App)
// app.use(router)
// app.mount('#app')