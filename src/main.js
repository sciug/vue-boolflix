import Vue from "vue";
import App from "./App.vue";
import CountryFlag from 'vue-country-flag';
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

Vue.component('country-flag', CountryFlag);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
