<template>
  <div>
    <Header />
    <h1>Hello, Welcome to Add Restuarant Page😁</h1>
  </div>
</template>
<script>
import Header from "./Header.vue";
export default {
  // eslint-disable-next-line
  name: "Add",
  components: {
    Header,
  },
  mounted() {
    let user = localStorage.getItem("user-info");
    if (!user) {
      this.$router.push({ name: "SignUp" });
    }
  },
};
</script>
