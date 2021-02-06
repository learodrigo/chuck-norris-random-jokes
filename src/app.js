import Vue from 'vue'

window.axios = require('axios')

import App from './App.vue'
import Contact from './components/Contact.vue'
import Error404 from './components/Error404.vue'


new Vue({
    render: (h) => h(App)
}).$mount( '#app' )
