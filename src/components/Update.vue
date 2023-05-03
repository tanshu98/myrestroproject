<template>
  <div>
    <Header />
    <h1>Hello, Welcome to Update Restuarant Page😁</h1>
  </div>
</template>
<script>
import Header from "./Header.vue";
export default {
  // eslint-disable-next-line
  name: "Update",
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
