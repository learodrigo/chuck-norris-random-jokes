import Vue from 'vue'
import Accordion from "./components/Accordion"

new Vue({
    el: '#app',

    components: {
        Accordion
    },

    data: {
        items: [
            {id: 1, title: 'Title 1', description: 'Description for 1'},
            {id: 2, title: 'Title 2', description: 'Description for 2'},
            {id: 3, title: 'Title 3', description: 'Description for 3'},
            {id: 4, title: 'Title 4', description: 'Description for 4'},
            {id: 5, title: 'Title 5', description: 'Description for 5'},
            {id: 6, title: 'Title 6', description: 'Description for 6'},
            {id: 7, title: 'Title 7', description: 'Description for 7'}
        ]
    }
})