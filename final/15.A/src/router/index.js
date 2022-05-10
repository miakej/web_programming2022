import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';
import CollectionList from '../views/CollectionList.vue';
import CollectionDetails from '../views/CollectionDetails.vue';
import Test from '../views/Test.vue';

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/', // default path
      name: 'home',
      component: Home
    },
    {
      path: '/collection', // list of vinyls
      name: 'collection',
      component: CollectionList
    },
    {
      path: '/collection/:id', // vinyl detail
      name: 'collection-details',
      component: CollectionDetails
    },
    {
      path: '/test', //new form test
      name: 'test',
      component: Test
    },
  ]
})

export default router
