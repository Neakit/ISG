import Vue from 'vue'
import VueScrollTo from 'vue-scrollto'

Vue.use(VueScrollTo, {
    easing: 'ease-in',
    // offset: -60,
    force: true,
    cancelable: true,
    x: false,
    y: true
})
