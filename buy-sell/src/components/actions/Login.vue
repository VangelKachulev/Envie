<template>
  <div class="login-form">
    <form @submit.prevent="login">
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="text" id="email" v-model="user.email" required />
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="user.password" required />
      </div>
      <div class="form-group">
        <button type="submit">Login</button>
      </div>
    </form>
  </div>
</template>

<script>
import { loginUser } from "../../providers/auth.js";
import { mapActions } from "pinia";
import { useUserStore } from "../../store/userStore.js";
export default {
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
    };
  },

  methods: {
    ...mapActions(useUserStore, ["setUserData"]),
    async login() {
      if (this.user.password.length < 6 || this.user.email.length < 6) {
        alert(`Username or password are too short!`);
        return;
      } else {
        try {
          const userData = await loginUser(this.user);

          if (userData) {
            this.setUserData(userData);
            this.$router.push("/products");
          } else {
            alert(`unknown user`);
          }
        } catch (e) {
          alert(`Something went wrong.Try again!`);
          // navigate("/404");
          return;
        }
      }
    },
  },
};
</script>

<style>
.login-form {
  max-width: 300px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input[type="email"],
input[type="password"] {
  width: 100%;
  padding: 8px;
  border-radius: 3px;
  border: 1px solid #ccc;
}

button {
  padding: 10px;
  border-radius: 3px;
  border: none;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>
