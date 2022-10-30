import HomePage from '@/components/HomePage'
import AboutPage from '@/components/AboutPage'
import DisastersPage from '@/components/DisastersPage'
import NewsletterPage from '@/components/NewsletterPage'
import UpdatesPage from '@/components/UpdatesPage'
import ResourcesPage from '@/components/ResourcesPage'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)


import Vue from 'vue'
import Router from 'vue-router'

// use router
Vue.use(Router)



export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: Homepage
    },
    {
      path: '/',
      name: 'AboutPage',
      component: AboutPage
    },
    {
      path: '/',
      name: 'DisastersPage',
      component: DisastersPage
    },
    {
      path: '/',
      name: 'NewsletterPage',
      component: NewsletterPage
    },
    {
      path: '/',
      name: 'UpdatesPage',
      component: UpdatesPage
    },
    {
      path: '/',
      name: 'ResourcesPage',
      component: ResourcesPage
    }
  ]
});
