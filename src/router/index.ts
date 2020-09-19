import Vue from 'vue';
import VueRouter, {RouteConfig} from 'vue-router';

import Money from '@/views/Money.vue';
import Labels from '@/views/Labels.vue';
import Statistics from '@/views/Statistics.vue';
import Not from '@/404/Not.vue';
import AddTag from '@/components/addtag.vue';



Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    redirect: '/Money'
  },

  {
    path: '/Money',
    component: Money
  },

  {
    path: '/Labels',
    component: Labels
  },

  {
    path: '/Statistics',
    component: Statistics
  },
  {
    path:'/AddTag',
    component:AddTag
  },
  {
    path: '*',
    component: Not
  },


];

const router = new VueRouter({
  routes
});

export default router;
