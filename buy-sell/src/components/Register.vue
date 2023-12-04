<template>
  <div class="registration-form">
    <h2>Register</h2>
    <form @submit.prevent="registerUser">
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="text" id="email" v-model="email" required/>
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required/>
      </div>
      <div class="form-group">
        <label for="repeatPassword">Repeat Password:</label>
        <input type="password" id="repeatPassword" v-model="repeatPassword" required/>
      </div>
      <div class="form-group">
        <label for="gender">Gender:</label>
        <select id="gender" v-model="gender" required>
          <option value="">Select</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>
      <button type="submit">Register</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import { useVuelidate } from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";

export default {


  data() {
    return {
      email: "",
      password: "",
      repeatPassword: "",
      gender: "",
    };
  },


  methods: {
    async registerUser() {
      fetch(`http://localhost:3030/users/register`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          email: this.email,
          password: this.password,
          repeatPassword: this.repeatPassword,
          gender: this.gender,
        }),
      })
        .then((response) => response.json())
        .then((json) => console.log(json));
      
      console.log("Registering user...");
      console.log("Email:", this.email);
      console.log("Password:", this.password);
      console.log("Repeated Password:", this.repeatPassword);
      console.log("Gender:", this.gender);
     
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
