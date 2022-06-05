<script setup lang="ts">
import { useRouter } from "vue-router";
import { ref } from "vue";

const { navbarTitle } = defineProps(["navbarTitle"]);
const localDate = ref(new Date().toISOString().split("T")[0]);
const router = useRouter();

const onHouseClick = () => router.push("/");
</script>

<template>
  <nav class="navbar">
    <p>{{ navbarTitle }}</p>
    <div class="date">
      <p>{{ localDate }}</p>
      <p class="to-home" @click="onHouseClick">&#8962;</p>
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
    @include display-flex(row, center, center, 20px);

    .to-home {
      font-size: 2rem;
      cursor: pointer;
      transition: all 0.35s;

      &:active {
        color: green;
      }
    }
  }
}

.wrapper {
  margin: 20px 20%;
}
</style>
