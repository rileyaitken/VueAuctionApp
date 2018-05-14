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
    currentCategory: "",
      auctions: [],
      auctionMainPhotos: []
  },

  mounted: function() {
    this.getCategories();
    this.getCurrentCategory();
    this.getAuctions();
  },

  methods: {

    getCategories: function() {
        this.$http.get("http://localhost:4941/api/v1/categories")
          .then(function(response) {
            console.log(response);
            for (let i = 0; i < response.data.length; i++) {
              this.categories.push(response.data[i]);
            }
          }, function (error) {
            console.log(error);
          });
        console.log(this.categories);
    },

    getAuctions: function() {
        this.getCurrentCategory();
        let queryParams = "";
        if (this.q !== "Title") {
          queryParams += "?q=" + this.q;
          if (this.currentCategory != 'Any') {
              for (let i = 0; i < this.categories.length; i++) {
                  if (this.categories[i].categoryTitle === this.currentCategory) {
                      let categoryId = this.categories[i].categoryId;
                  }
              }
              queryParams += "&category-id=" + categoryId.toString();
          }
        } else {
            if (this.currentCategory != 'Any') {
                for (let i = 0; i < this.categories.length; i++) {
                    if (this.categories[i].categoryTitle === this.currentCategory) {
                        let categoryId = this.categories[i].categoryId;
                    }
                }
                queryParams += "?category-id=" + categoryId.toString();
            }
        }
        this.$http.get("http://localhost:4941/api/v1/auctions" + queryParams)
            .then(function (response) {
                this.auctions = response.data;
                console.log(auctions);
                for (var i = 0; i < response.data.length; i++) {
                    this.$http.get("http://localhost:4941/api/v1/auctions/" + response.data[i].auctionId + "/photos")
                        .then(function (photo_responses) {
                            this.auctionMainPhotos.push(photo_responses.data[i]);
                        }, function (error) {
                            console.log(error);
                        });
                }
            }, function (error) {
                console.log(error);
            });
    },

      getCurrentCategory: function() {
          var categoriesEl = document.getElementById("categoriesList");
          this.currentCategory = categoriesEl.options[categoriesEl.selectedIndex].text;
      },
  },

  render: h => h(App)
});

