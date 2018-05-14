<template>
  <div id="app">
    <header>
      user info
    </header>
    <router-view></router-view>
    <footer>
      copy
    </footer>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
