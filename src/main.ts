import 'spectre.css';
import 'spectre.css/dist/spectre-icons.css';
import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
