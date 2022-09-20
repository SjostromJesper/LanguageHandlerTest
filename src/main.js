import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {setLanguageFallback} from "./utils/LanguageHandler.js";

setLanguageFallback('sv')

createApp(App).mount('#app')
