<template>
  <div>
    <h1 id="siteheading">eTrade: Buy and Sell</h1>

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

      <input type="submit" value="Search" />
    </form>

  </div>
</template>

<script>
    export default {
        name: "Home",

        methods: {

        }
    }
</script>
