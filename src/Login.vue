<template>
    <div>
        <h1 id="siteheading">eTrade: Buy and Sell</h1>

        <form id="loginForm" v-on:submit="validateLogin()">
            Please supply username/email and password
            <input type="text" v-model="username" value="Enter username">
            <input type="email" v-model="email" value="Enter email">
            <input type="password" v-model="password" value="Enter password">
        </form>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data: {
            username: "",
            email: "",
            password: ""
        },
        methods: {
            validateLogin: function() {

            }
            login: function(username, email, password) {

            }
        }
    }
</script>

<style scoped>

</style>
