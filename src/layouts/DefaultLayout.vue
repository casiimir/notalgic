<script setup lang="ts">
import { useRouter } from "vue-router";
import { ref } from "vue";

const { navbarTitle } = defineProps(["navbarTitle"]);
const localDate = ref(new Date().toISOString().split("T")[0]);
const router = useRouter();
</script>

<template>
  <nav class="navbar">
    <p>{{ navbarTitle }}</p>
    <div class="date">
      <router-link to="/">
        <p class="to-home">&#8962;</p>
      </router-link>

      <router-link to="/fonts">
        <p class="to-fonts">&#945;</p>
      </router-link>
      <p>{{ localDate }}</p>
    </div>
  </nav>
  <div class="wrapper">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
@import "../styles/variables";
@import "../styles/mixins";

.navbar {
  @include display-flex(row, space-between, center);

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
  .date {
    @include display-flex(row, center, center, 10px);

    a {
      text-decoration: none;
      color: $bg-dark-grey-color;
    }

    .to-home,
    .to-fonts {
      padding: 0 4px;
      font-size: 2rem;
      cursor: pointer;
      transition: all 0.35s;

      &:active {
        background: $bg-dark-grey-color;
        color: $primary-green-color;
      }
    }
  }
}

.wrapper {
  margin: 20px 20%;
}
</style>
