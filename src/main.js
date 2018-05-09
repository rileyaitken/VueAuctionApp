import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

Vue.use(VueRouter);
Vue.use(VueResource);

const routes = [
  {
    path: "http://localhost:8080/",
    component: Home
  },
  {
    path: "http://localhost:8080/createuser",
    component: Register
  },
  {
    path: "http://localhost:8080/auctions/:auctionId",
    component: ViewAuction
  },
  {
    path: "http://localhost:8080/login",
    component: Login
  },
  {
    path: "http://localhost:8080/createauction",
    component: CreateAuction
  },
  {
    path: "http://localhost:8080/"
  }
]

const router = VueRouter({
  routes: routes,
  mode: 'history'
});

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
