<template>
  <div>
    <h1 id="siteheading">eTrade: Buy and Sell</h1>

    <form id="searchbox" align="left" v-on:submit="searchAuctions()">
      <input v-model="query" placeholder="Title" />
      <select id="categoriesList">
        <option selected="selected">{{ categories[0] }}</option>
        <option selected="selected">{{ categories[1] }}</option>
        <option selected="selected">{{ categories[2] }}</option>
        <option selected="selected">{{ categories[3] }}</option>
        <option selected="selected">{{ categories[4] }}</option>
      </select>

      <input type="submit" value="Search" />
    </form>

  </div>
</template>

<script>
    export default {
        name: "Home"
    }
</script>
