<script setup lang="ts">
import { computed, onMounted } from "vue";
import { useGeneralStore } from "./store/index";
import { useFirebaseStore } from "./store/firebaseStore";

const generalStore = useGeneralStore();
const firebaseStore = useFirebaseStore();
const getFontFamily = computed(() => generalStore.getFontFamily);

onMounted(() => {
  firebaseStore.setUserByLocalStorage();
});
</script>

<template>
  <body :style="{ fontFamily: `${getFontFamily}` }">
    <router-view />
  </body>
</template>

<style lang="scss">
@import "./styles/global.scss";
@import "./styles/variables.scss";

:root {
  --primary-color: #00ff00;
  --secondary-color: #131313;
}

body {
  height: 100vh;
  background: rgb(32, 32, 32);
  background: radial-gradient(
    circle,
    rgba(32, 32, 32, 1) 0%,
    rgba(19, 19, 19, 1) 74%
  );
  font-family: "VT323", monospace;
  filter: blur(0.1px);

  overflow: hidden;
  transform: translateY(5px) rotate(0.05deg) skew(-0.1deg, 0.1deg);
}
</style>
