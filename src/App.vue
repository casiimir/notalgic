<script setup lang="ts">
import { computed } from "vue";
import { useGeneralStore } from "./store/index";
const generalStore = useGeneralStore();

const getFontFamily = computed(() => generalStore.getFontFamily);
</script>

<template>
  <body :style="{ fontFamily: `${getFontFamily}` }">
    <router-view />
  </body>
</template>

<style lang="scss">
@import "./styles/global.scss";
@import "./styles/variables.scss";

body {
  background: $bg-dark-grey-color;
  font-family: "VT323", monospace;
}
</style>
