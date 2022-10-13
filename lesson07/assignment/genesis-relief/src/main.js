import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import HomePage from './components/HomePage.vue'
import DisasterPage from './components/DisasterPage.vue'
import AboutPage from './components/AboutPage.vue'
import ResourcesPage from './components/ResourcesPage.vue'
import UpdatesPage from './components/UpdatesPage.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(VueRouter)


const routes = [
{ path: '/',
    name: 'HomePage',
    component: HomePage},

    {   path: '/AboutPage',
    name: 'AboutPage',
    component:  AboutPage},

    {   path: '/DisastersPage',
    name: 'DisastersPage',
    component:  DisastersPage},

    {   path: '/ResourcesPage',
    name: 'ResourcesPage',
    component:  ResourcesPage},

    {   path: '/UpdatesPage',
    name: 'UpdatesPage',
    component:  UpdatesPage},

    {   path: '/NewsletterPage',
    name: 'NewsletterPage',
    component:  NewsletterPage},

]
const router = new VueRouter({
  routes,
  mode: 'history'
})



new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
