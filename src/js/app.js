import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css'

import App from '../Components/App'

Vue.use(Vuetify)

new Vue({
  vuetify: new Vuetify(),
  render: createElement => createElement(App)
}).$mount('#app')