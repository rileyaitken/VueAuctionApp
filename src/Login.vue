<template>
    <div>
        <h1 id="siteheading">eTrade: Buy and Sell</h1>

        <form id="loginForm" v-on:submit="validateLogin()">
            Please supply username/email and password
            <input type="text" v-model="username" name="username" value="Enter username">
            <input type="text" v-model="email" name="email" value="Enter email">
            <input type="password" v-model="password" name="password" value="Enter password" required>
        </form>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data: () => {
            return {
                "username": "",
                "email": "",
                "password": ""
            }
        },
        methods: {
            validateLogin: function() {
                let login = true;
                let user = document.forms["loginForm"]["username"].value;
                let email = document.forms["loginForm"]["email"].value;
                let pw = document.forms["loginForm"]["password"].value;
                if (user && email === "") {
                    alert("Please enter in username and/or email");
                    login = false;
                } else if (pw === "") {
                    alert("Please enter in a password");
                    login = false;
                }
                if (login) {
                    login(user, email, pw);
                }
            },

            login: function(username, email, password) {
                this.$http.post("http://localhost:4941/api/v1/users/login") +
                    JSON.stringify({
                        username: username,
                        email: email,
                        password: password
                    }).then(function (response) {
                        this.authToken = response.data.token;
                    });
            }
        }
    }
</script>

<style scoped>

</style>
