<template>
  <div>
    <h1 id="siteheading">eTrade: Buy and Sell</h1>

    <div class="navigation">
      <ul>
        <li><router-link :to="{ name: 'home'}">Home - View Auctions</router-link></li>
        <li><router-link :to="{ name: 'createauction'}">List Auction</router-link></li>
        <li><router-link :to="{ name: 'register'}">Create Account</router-link></li>
        <li>
          <div class="dropdown">
            <button onclick="showMyETrade()" class="dropbtn">My E-Trade</button>
            <div id="accDetails" class="dropdown-content">
              <router-link :to="{ name: 'mycurrentauctions'}">My Current Auctions</router-link>
              <router-link :to="{ name: 'mysoldauctions'}">My Sold Auctions</router-link>
              <router-link :to="{ name: 'myexpiredauctions'}">My Expired Auctions</router-link>
              <router-link :to="{ name: 'mycurrentbids'}">My Current Bids</router-link>
              <router-link :to="{ name: 'mywonauctions'}">My Won Auctions</router-link>
            </div>
          </div>
        </li>
      </ul>
    </div>

    <form id="searchbox" align="left" v-on:submit="getAuctions()">
      <input v-model="q" placeholder="Title" />
      <select id="categoriesList">
        <option selected="selected">Any</option>
        <option>{{ categories[0].categoryTitle }}</option>
        <option>{{ categories[1].categoryTitle }}</option>
        <option>{{ categories[2].categoryTitle }}</option>
        <option>{{ categories[3].categoryTitle }}</option>
        <option>{{ categories[4].categoryTitle }}</option>
      </select>

      Auction Status:
      <input type="radio" name="status" value="all" checked>All>
      <input type="radio" name="status" value="upcoming" checked>Upcoming
      <input type="radio" name="status" value="active" checked>Active
      <input type="radio" name="status" value="expired">Expired
      <input type="radio" name="status" value="won">Won

      <input type="submit" value="Search" />
    </form>

    <div id="auctions" v-for="auction in auctions">

    </div>

  </div>
</template>

<script>
    export default {
        name: "Home",
        data: function() {
            return {
                status: ""
            }
        },
        methods: {
          getStatusSelection: function() {
              this.status = document.querySelector('input[name="status"]:checked').value;
          }
        }
    }
</script>

