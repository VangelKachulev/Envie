<template>
  <div class="main">
    <div class="login-form">
      <h1>Login</h1>
      <form @submit.prevent="login">
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="text" id="email" v-model="user.email" required />
        </div>
        <div class="form-group">
          <label for="password">Password:</label>
          <input type="password" id="password" v-model="user.password" required />
        </div>
        <div class="form-group3">
          <button type="submit">Login</button>
        </div>
        <div class="line-with-word">
          <div class="line"></div>
          <div class="word">or</div>
          <div class="line"></div>
        </div>
        <div class="form-group3">
          <button @click="register" type="submit">Sign Up</button>
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
    register(){
      this.$router.push("/register");
    }
  },
};
</script>

<style scoped>
.main {
  height: 100vh;
  background-color: rgb(179, 209, 243);
  border-radius: 15px;
  background-image: url("../views/7552428_33.jpg");
  box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
}
h1 {
  text-align: center;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-weight: 800;
}
.login-form {
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  width: 300px;
  height: 45vh;

  padding: 0;

  border-radius: 5px;
  background-color: #f9f9f9;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.login-form:hover{
  box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
}
form {
  width: 208px;
  margin: 0 auto;
}
label {
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-size: 18px;
}
.form-group {
  margin-bottom: 35px;
  margin: 0 auto;
}
.form-group3{
  display: flex;
}
label {
  display: block;
  margin-bottom: 5px;
}

#email,
#password {
  width: 200px;
  margin-bottom: 20px;
  border-radius: 3px;
  height: 1.5rem;
  background-color: rgba(217, 212, 212, 0.523);
}

button {
  
  width: 150px;
  height: 2.0rem;
  border-radius: 3px;
  border: none;
margin:0 auto;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
}

button:hover {
  background-color: #18406c;
}
.line-with-word {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-top: 18px; /* Adjust as needed */
  margin-bottom: 18px
}

.line {
  border-top: 1px solid #000; /* Adjust line style */
  width: 100px; /* Adjust line length */
  margin-right: 10px; /* Space between line and word */
}

.word {
  background-color: #fff; /* Set background color */
  padding: 0 10px; /* Adjust padding */
}

</style>
