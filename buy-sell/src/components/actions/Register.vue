<template>
  <div class="registration-form">
    <h1>Register</h1>
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
      if (
        this.user.password !== this.user.repeatPassword ||
        this.user.email.length < 6 ||
        this.user.password.length < 6
      ) {
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
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px,
    rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px,
    rgba(0, 0, 0, 0.09) 0px -3px 5px;
  width: 450px;
  height: 50vh;

  border-radius: 15px;
  background-color: #f9f9f9;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
h1 {
  text-align: center;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-weight: 800;
}
form {
  width: 408px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-items: center;
}
.form-group {
  margin-bottom: 35px;
  margin: 0 auto;
  width:400px;
  display:flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
}

label {
  display: block;
  margin-bottom: 5px;
  font-size: 1.6rem;
  width:400px
}

#email,
#password,
#repeatPassword {
  width: 80%;
  margin-bottom: 20px;
  border-radius: 3px;
  height: 1.5rem;
  background-color: rgba(217, 212, 212, 0.523);
}
label {
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-size: 18px;
  width: 80%;
}
button {
  width: 150px;
  height: 2rem;
  border-radius: 3px;
  border: none;
  margin: 16px auto;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
}
</style>
