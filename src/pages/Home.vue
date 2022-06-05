<script setup lang="ts">
import MessageList from "../components/MessageList.vue";
import DefaultLayout from "../layouts/DefaultLayout.vue";
</script>

<template>
  <DefaultLayout navbarTitle="Documents list">
    <MessageList />
  </DefaultLayout>
</template>

<style lang="scss">
@import "../styles/global.scss";
@import "../styles/variables.scss";
</style>
