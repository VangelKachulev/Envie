<template>
  <div class="registration-form">
    <form @submit.prevent="register">
      <h1>CREATE ACCOUNT</h1>
      <div class="form-group">
        <input
          type="email"
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
      <div class="form-group">
        <input
          type="password"
          id="repeatPassword"
          v-model="user.repeatPassword"
          required
          placeholder="Repeat password"
        />
      </div>

      <div class="form-group3">
        <button type="submit">SIGN IN</button>
        <span @click="backToStore" class="return">Return to Store</span>
      </div>
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
            this.$router.push("/");
          }
        } catch {
          alert(`Something went wrong.Try again!`);
          this.$router.push("/404");
          return;
        }
      }
    },
    backToStore() {
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.registration-form {
  width: 550px;
  height: 65vh;
  position: absolute;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
h1 {
  font-family: "Tenor Sans", sans-serif;
  font-weight: 100;
  letter-spacing: 2px;
}
form {
  width: 100%;
  margin-top: 150px;
}
.form-group {
  margin-bottom: 35px;
  margin: 0 auto;
}

label {
  display: block;
  margin-bottom: 5px;
  font-size: 1.6rem;
  width: 300px;
}

#email,
#password,
#repeatPassword {
  width: 100%;
  height: 40px;
  border: 1px solid rgba(128, 128, 128, 0.472);
  padding-left: 1rem;
  font-family: "Tenor Sans", sans-serif;
  margin-bottom: 20px;
  color: rgb(176, 170, 170);
}
#repeatPassword {
  margin-bottom: 50px;
}
label {
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-size: 18px;
  width: 80%;
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
