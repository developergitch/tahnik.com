import Vue from 'vue';
import VueRouter from 'vue-router';
import ProfileFront from './components/profile_front.vue';

Vue.use(VueRouter);

let routes = [
  {
    path: '/',
    component: ProfileFront,
  },
];

export default new VueRouter({ mode: 'history', routes });
