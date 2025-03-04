import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Contact from '../views/Contact.vue';
import Services from '../views/Services.vue';
import Pricing from '../views/Pricing.vue';
import Available from '../views/Available.vue';  // Import Available.vue

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/contact', component: Contact },
  { path: '/services', component: Services },
  { path: '/pricing', component: Pricing },
  { path: '/available', component: Available },  // Add the Available route
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
