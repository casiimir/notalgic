<script setup lang="ts">
import DefaultLayout from "../layouts/DefaultLayout.vue";
import FontsList from "../components/FontsList.vue";
</script>

<template>
  <DefaultLayout navbarTitle="Documents list">
    <FontsList />
  </DefaultLayout>
</template>

<style lang="scss">
@import "../styles/global.scss";
@import "../styles/variables.scss";
</style>
