<script setup lang="ts">
import MessageList from "./components/MessageList.vue";
import DefaultLayout from "./layouts/DefaultLayout.vue";
</script>

<template>
  <router-view />
</template>

<style lang="scss">
@import "./styles/global.scss";
@import "./styles/variables.scss";

body {
  background: $bg-dark-grey-color;
  font-family: "VT323", monospace;
}
</style>
