import Vue from 'vue'
import Router from 'vue-router'
// import Brazil from '@/components/Brazil'
// import Panama from '@/components/Panama'
// import Hawaii from '@/components/Hawaii'
// import Jamaica from '@/components/Jamaica'
import Home from '@/views/Home'

Vue.use(Router)

export default new Router({
  mode: 'history',
  // mode: 'history' can delete the # in the url
  linkExactActiveClass: 'active-color',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      props: true
    },
    // {
    //   path: '/brazil',
    //   name: 'brazil',
    //   component: () => import(/* webpackChunkName:"brazil" */ '@/views/Brazil')
    //   // component: Brazil
    // },
    // {
    //   path: '/panama',
    //   name: 'panama',
    //   component: () => import(/* webpackChunkName:"panama" */ '@/views/Panama')
    //   // component: Panama
    // },
    // {
    //   path: '/hawaii',
    //   name: 'hawaii',
    //   component: () => import(/* webpackChunkName:"hawaii" */ '@/views/Hawaii')
    //   // component: Hawaii
    // },
    // {
    //   path: '/jamaica',
    //   name: 'jamaica',
    //   component: () => import(/* webpackChunkName:"Jamica" */ '@/views/Jamaica')
    //   // component: Jamaica
    // },
    // all path are store in DestinationDetails
    {
      path: '/destination/:slug',
      // '/details/:id' (show the id in the url)
      name: 'DestinationDetails',
      props: true,
      component: () => import(/* webpackChunkName:"DestinationDetails" */ '@/views/DestinationDetails'),
      // component: Jamaica
      children: [
        {
          path: /* details/:slug/ */':experienceSlug',
          // details/:slug/ can be delete because it already show at the beginning
          name: 'experienceDetails',
          props: true,
          component: () => import(/* webpackChunkName:"ExperienceDetails" */ '@/views/ExperienceDetails')
        }
      ]
    }

  ]
})
