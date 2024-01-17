<template>
  <div class="main-login">
    <div class="login-form">
      <h1>LOGIN</h1>
      <p class="no-account">
        Don't have an account yet?
        <span class="register-span" @click="register" type="submit">Create account</span>
      </p>
      <form class="form" @submit.prevent="login">
        <div class="form-group">
          <input
            type="text"
            id="email"
            v-model="user.email"
            required
            placeholder="Email"
          />
        </div>
        <div class="form-group">
          <input
            type="password"
            id="password"
            v-model="user.password"
            required
            placeholder="Password"
          />
        </div>
        <p class="forgot-password">Forgot password?</p>
        <div class="form-group3">
          <button type="submit">SIGN IN</button>
          <span @click="backToStore" class="return">Return to Store</span>
        </div>
      </form>
    </div>
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

          return;
        }
      }
    },
    register() {
      this.$router.push("/register");
    },
    backToStore() {
      this.$router.push("/home");
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Tenor+Sans&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Amatic+SC&family=Pathway+Gothic+One&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Amatic+SC&family=Pathway+Gothic+One&family=Satisfy&display=swap");

.main-login {
}
h1 {
  font-family: "Tenor Sans", sans-serif;
  font-weight: 100;
  letter-spacing: 2px;
}
.no-account {
  font-family: "Tenor Sans", sans-serif;
  font-weight: 100;
  width: 500px;
  letter-spacing: 1px;
  font-size: 18px;
  color: rgb(163, 155, 155);
}
.register-span {
  color: rgb(67, 64, 64);
  cursor: pointer;
}
.login-form {
  width: 500px;
  height: 45vh;
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.form {
  width: 100%;
  margin-top: 30px;
}

.form-group {
  margin-bottom: 35px;
  margin: 0 auto;
}

#email,
#password {
  width: 100%;

  height: 40px;
  border: 1px solid rgba(128, 128, 128, 0.472);
  padding-left: 1rem;
  font-family: "Tenor Sans", sans-serif;
  color: rgb(176, 170, 170);
}
#email {
  margin-bottom: 20px;
}
.forgot-password {
  font-family: "Tenor Sans", sans-serif;
  font-weight: 100;
  margin-bottom: 50px;
  letter-spacing: 1px;
  font-size: 1rem;
  color: rgb(163, 155, 155);
}
button {
  width: 220px;
  height: 46px;
  border-radius: 28px;
  border: none;
  margin: 0 20px;
  background-color: #d69f92;
  color: #fff;
  cursor: pointer;
  letter-spacing: 2px;
}
.return {
  border-bottom: 1px solid rgb(199, 194, 194);
  padding: 4px;
  font-family: "Tenor Sans", sans-serif;
  cursor: pointer;
  letter-spacing: 1px;
}
</style>
