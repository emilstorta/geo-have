import './assets/style.css'

import { createApp } from 'vue'
import App from './App.vue'


createApp(App).mount('#app')
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js').then((registration) => {
        console.log('SW registered: ', registration);
      }).catch((registrationError) => {
        console.log('SW registration failed: ', registrationError);
      });
    });
  }

// Register the service worker
window.addEventListener('load', () => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js')
        .then(registration => {
          console.log('Service Worker registered: ', registration);
        })
        .catch(error => {
          console.log('Service Worker registration failed: ', error);
        });
    }
  });