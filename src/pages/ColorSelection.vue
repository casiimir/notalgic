<script setup lang="ts">
import DefaultLayout from "../layouts/DefaultLayout.vue";
import ColorsList from "../components/ColorsList.vue";
</script>

<template>
  <DefaultLayout navbarTitle="Color setting">
    <ColorsList />
  </DefaultLayout>
</template>

<style lang="scss">
@import "../styles/global.scss";
@import "../styles/variables.scss";
</style>
