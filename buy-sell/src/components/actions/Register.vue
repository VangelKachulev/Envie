<template>
  <div class="registration-form">
    <h2>Register</h2>
    <form @submit.prevent="register">
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="user.email" required />
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="user.password" required />
      </div>
      <div class="form-group">
        <label for="repeatPassword">Repeat Password:</label>
        <input
          type="password"
          id="repeatPassword"
          v-model="user.repeatPassword"
          required
        />
      </div>

      <button type="submit">Register</button>
    </form>
  </div>
</template>

<script>
import { registerUser, loginUser } from "../../providers/auth.js";
import { mapActions } from "pinia";
import { useUserStore } from "../../store/userStore.js";

export default {
  data() {
    return {
      user: {
        email: "",
        password: "",
        repeatPassword: "",
      },
    };
  },

  methods: {
    ...mapActions(useUserStore, ["setUserData"]),
    async register() {
      if (this.user.password !== this.user.repeatPassword || this.user.email.length < 6 || this.user.password.length < 6) {
        alert(`Check your data and try again!`);
        return;
      } else {
        try {
          const userData = await registerUser(this.user);
          loginUser(this.user);
          this.setUserData(userData);
          if (userData.data.accessToken) {
            this.$router.push("/home");
          }
        } catch {
          alert(`Something went wrong.Try again!`);
          // navigate("/404");
          return;
        }
      }
    },
  },
};
</script>

<style scoped>
.registration-form {
  max-width: 400px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input[type="email"],
input[type="password"],
select {
  width: 100%;
  padding: 8px;
  border-radius: 3px;
  border: 1px solid #ccc;
}

button {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}
</style>
