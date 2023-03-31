import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Chat from "@/components/Chat.vue";
import NewChat from "@/components/NewChat.vue";

import './assets/main.css'

const app = createApp(App)

app.use(router)
app.component('Chat', Chat)
app.component('NewChat', NewChat)
app.mount('#app')
