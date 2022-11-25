import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { VueQueryPlugin } from 'vue-query';

import App from './App.vue';
import router from './router';

import { i18n } from '@/i18n';
import { vuetifyConfig } from '@/plugins/vuetify';
import { vueQueryPluginOptions } from '@/plugins/vue-query';
import '@/plugins/axios';

const app = createApp(App);

app.use(i18n);
app.use(createPinia());
app.use(router);
app.use(vuetifyConfig);
app.use(VueQueryPlugin, vueQueryPluginOptions);

app.mount('#app');
