import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';

import HomePage from '@/components/HomePage';
import AboutPage from '@/components/AboutPage';
import DisastersPage from '@/components/DisastersPage';
import NewsletterPage from '@/components/NewsletterPage';
import UpdatesPage from '@/components/UpdatesPage';
import ResourcesPage from '@/components/ResourcesPage';
import ReliefWeb from '@/components/ReliefWeb'

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';


// use router
Vue.use(VueRouter);

const routes = [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/About',
      name: 'AboutPage',
      component: AboutPage
    },
    {
      path: '/Disasters',
      name: 'DisastersPage',
      component: DisastersPage
    },
    {
      path: '/Newsletter',
      name: 'NewsletterPage',
      component: NewsletterPage
    },
    {
      path: '/Updates',
      name: 'UpdatesPage',
      component: UpdatesPage
    },
    {
      path: '/Resources',
      name: 'ResourcesPage',
      component: ResourcesPage
    },
    {
      path: '/ReliefWeb',
      name: 'ReliefWebPage',
      component: ReliefWeb
    }
  ];

  var router = new VueRouter({
    routes: routes,

  })

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
