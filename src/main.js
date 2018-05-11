import Vue from 'vue';
import App from './App.vue';
import Home from './Home.vue';
import ViewAuction from './ViewAuction.vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

Vue.use(VueResource);
Vue.use(VueRouter);

Vue.http.options.emulateJSON = true;

const vue_routes = [
  {
    path: "/",
    component: Home
  },
  {
    path: "/auctions",
    component: ViewAuction
  }
];

const my_router = new VueRouter({
  routes: vue_routes,
  mode: 'history'
});

new Vue({
  el: '#app',
  router: my_router,
  data: {
    q: "",
    categories: [],
    currentCategory: ""
  },

  mounted: function() {
    this.getCategories();
    //this.getAuctions();
  },

  methods: {

    getCategories: function() {
        this.$http.get("http://localhost:4941/api/v1/categories")
          .then(function(response) {
            console.log(response);
            for (let i = 0; i < response.data.length; i++) {
              this.categories.push(response.data[i].categoryTitle);
            }
          }, function (error) {
            console.log(error);
          });
        console.log(this.categories);
    }

    //getAuctions: function() {
        //let queryParams = "";
        //if (this.q !== "Title") {
          //queryParams += this.q;
        //}
        //if (this.cate)
       // this.$http.get()
    //}
  },

  render: h => h(App)
});

