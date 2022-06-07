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
</template>

<style lang="scss" scoped>
@import "../styles/global";
@import "../styles/variables";
@import "../styles/mixins";

.wrapper {
  margin: 20px 20%;
}
</style>
