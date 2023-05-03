<template>
  <div class="nav">
    <a href="#">Home</a>
    <a @click="add" href="#">Add Restuarant</a>
    <a @click="update" href="#">Update Restuarant</a>
    <a @click="logout" href="#">Logout</a>
    <!-- @click is same as v-on:click -->
  </div>
</template>

<script>
export default {
  methods: {
    logout() {
      // Logout Logic -
      // 1.  Clear local storage
      // 2. Redirect our page to Login page
      localStorage.clear();
      this.$router.push({ name: "Login" });
    },
    add() {
      this.$router.push({ name: "Add" });
    },
    update() {
      this.$router.push({ name: "Update" });
    },
  },
  /* eslint-disable */
  name: "Header",
};
</script>

<style>
.nav {
  background-color: black;
  overflow: scroll;
  margin: auto;
}
.nav a {
  float: left;
  color: whitesmoke;
  text-decoration: none;
  text-align: center;
  padding: 15px;
  margin-right: 10px;
}
.nav a:hover {
  background-color: whitesmoke;
  color: grey;
  font-weight: bolder;
}
</style>
