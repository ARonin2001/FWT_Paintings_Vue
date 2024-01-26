import '@/reset.scss';
import '@/main.scss';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import componentsUI from '@/components/UI';

const app = createApp(App);

componentsUI.forEach((component) => {
  app.component(component.name, component);
});

app.use(createPinia());

app.mount('#app');
