<template>
  <img class="logo" src="../assets/download.jpeg" />
  <h1>Sign Up</h1>
  <div class="form">
    <input type="text" placeholder="Enter Name" v-model="name" />
    <input type="email" placeholder="Enter Email" v-model="email" />
    <input type="password" placeholder="Enter Password" v-model="password" />
    <button v-on:click="signUp">Sign Up</button>
    <p>
      <router-link to="/login">Login</router-link>
    </p>
  </div>
</template>
<!-- v-model : this means that if our data changes, our input will too, and if our input changes, our data changes too. -->
<script>
import axios from "axios";
export default {
  name: "SignUp",
  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },
  methods: {
    // Since we are using apis to post data get data etc..using json server(We can use any bakend sever..or we can also create the bakend logic too)..
    // So this signUp() where we are using these apis becomes an asnychronous fucntion..Now to use the async function properly..we write async in front of the function and we write await as in line 28.
    async signUp() {
      let result = await axios.post("http://localhost:3000/user", {
        name: this.name,
        email: this.email,
        password: this.password,
      });
      // Here we check..if the result status is ok or not..if its ok..we display sign up done..
      console.log(result);
      // The HTTP 201 Created success status response code indicates that the request has succeeded and has led to the creation of a resource.
      // The common use case of this status code is as the result of a POST request.
      if (result.status === 201) {
        // Now we will store the values of user who have signed in ..in our local storage..
        localStorage.setItem("user-info", JSON.stringify(result.data));
        // Local storage requires data in the form of string so we are converting our result.data in string format.
        // So on correct sign up..we will redirect our user to our home page
        this.$router.push({ name: "Home" });
      }
    },
  },
  // Now here next thing we have to do is add a condition..so that once the user signs in our page..then it will only redirect to the Home Page..it must not be able to go to the sign up page..
  // So for this what we do is..we create a lifecycle hook called Mounted..and in that one..we add a condition that if..there is a value in our local storage..(i.e there are user credentials)..it will only redirect to the Home Page
  mounted() {
    // Get item of local storage
    let user = localStorage.getItem("user-info");
    // If the user's credentials are stored in local storage..we redirect them into our home page
    if (user) {
      this.$router.push({ name: "Home" });
    }
  },
};
</script>
<style>
.logo {
  width: 100px;
}
.form input {
  display: block;
  width: 300px;
  height: 25px;
  padding: 10px;
  margin: 2rem auto;
  border: 1px solid skyblue;
  border-radius: 5px;
}
.form button {
  width: 320px;
  height: 40px;
  color: #ffff;
  background-color: skyblue;
  cursor: pointer;
}
</style>

<!-- the mounted hook can be used to run code after the component has finished the initial rendering and created the DOM nodes: -->
