import { createApp } from 'vue';  // Import Vue
import App from './App.vue';  // Import the App component
import 'bootstrap/dist/css/bootstrap.min.css';  // Import Bootstrap's CSS
import { createPinia } from 'pinia';  // Import Pinia for state management
import router from './router';  // Import your router configuration
import './assets/main.css';  // Import your main CSS
import 'font-awesome/css/font-awesome.css'; // Import Font Awesome CSS

const app = createApp(App);  // Create the Vue app with App component

// Use Pinia for state management and the router
app.use(createPinia());
app.use(router);

// Mount the Vue app to the #app element in the DOM
app.mount('#app');
