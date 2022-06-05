<script setup lang="ts">
import { ref } from "vue";

const { navbarTitle } = defineProps(["navbarTitle"]);
const localDate = ref(new Date().toISOString().split("T")[0]);
</script>

<template>
  <nav class="navbar">
    <p>{{ navbarTitle }}</p>
    <p>{{ localDate }}</p>
  </nav>
  <div class="wrapper">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
@import "../styles/variables";
@import "../styles/mixins";

.navbar {
  @include display-flex(row, space-between);
  margin: 0 20% 80px;
  padding: 5px 10px;
  background: $primary-green-color;
  font-size: 1.2rem;
  font-weight: bold;
  text-shadow: 0 0 1px $bg-dark-grey-color;
  box-shadow: 0 0 3px $primary-green-color;

  p {
    margin: 0;
  }
}

.wrapper {
  margin: 20px 20%;
}
</style>
