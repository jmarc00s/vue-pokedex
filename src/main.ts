import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { VueQueryPlugin } from 'vue-query';
import type { VueQueryPluginOptions } from 'vue-query';

import App from './App.vue';
import router from './router';

import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

import axios from 'axios';
import { i18n } from './i18n';

axios.defaults.baseURL = 'http://localhost:3000';

const vuetify = createVuetify({
  components,
  directives,
});

const vueQueryPluginOptions: VueQueryPluginOptions = {
  queryClientConfig: {
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  },
};

const app = createApp(App);

app.use(i18n);
app.use(createPinia());
app.use(router);
app.use(vuetify);
app.use(VueQueryPlugin, vueQueryPluginOptions);

app.mount('#app');
