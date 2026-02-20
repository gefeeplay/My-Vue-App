import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
const baseUrl = 'http://212.193.30.175:5046'

const originFetch = window.fetch;
window.fetch = function(path, option) {
    const url = '${baseUrl}${path}';
    return originFetch(url, option);
}

createApp(App).mount('#app')
