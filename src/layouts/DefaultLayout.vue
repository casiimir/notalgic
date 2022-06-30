<script setup lang="ts">
import MainNavbar from "../components/MainNavbar.vue";

const { navbarTitle } = defineProps({
  navbarTitle: {
    type: String,
    required: false,
    default: "",
  },
});
</script>

<template>
  <MainNavbar :navbarTitle="navbarTitle" />
  <div class="wrapper">
    <slot></slot>
  </div>
  <footer class="footer">
    Made for <a href="https://www.linode.com/">Linode</a> and
    <a href="hashnode">Hashnode</a> hackathon with 💚
  </footer>
</template>

<style lang="scss" scoped>
@import "../styles/global";
@import "../styles/variables";
@import "../styles/mixins";

.wrapper {
  margin: 20px 20%;
}
footer {
  color: var(--primary-color);
  position: absolute;
  top: 98vh;

  a {
    text-decoration: none;
    color: var(--primary-color);
    color: white;
  }
}
</style>
