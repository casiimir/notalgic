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
    <div class="refresh"></div>
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
  filter: blur(0.1px) contrast(0.98) sepia(0.25);

  overflow: hidden;
  animation: flicker 0.15s infinite alternate;
  transform: scale(0.99, 0.98) rotate(0.05deg);

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: linear-gradient(
        transparentize(#fff, 1) 60%,
        transparentize(darken(#fff, 10), 0.88) 90%
      ),
      linear-gradient(
        90deg,
        transparentize(#ff0000, 0.94),
        transparentize(#00ff00, 0.98),
        transparentize(#0000ff, 0.94)
      );
    background-size: 100% 2px, 3px 100%;
    pointer-events: none;
    z-index: 1;
  }
}

button {
  padding: 5px 15px;
  color: var(--primary-color);
  background: transparent;
  border: 2px solid var(--primary-color);
  font-weight: bold;
  cursor: pointer;
  transition: all 0.35s;

  &:active {
    background: var(--primary-color);
    color: var(--secondary-color);
  }
}

.refresh {
  position: absolute;
  bottom: 100%;
  width: 100%;
  height: 80px;
  background: linear-gradient(
    0deg,
    var(--primary-color),
    rgba(255, 255, 255, 0.25) 10%,
    rgba(0, 0, 0, 0.1) 100%
  );
  opacity: 0.1;
  animation: refresh 8s linear infinite;
}

@keyframes refresh {
  0% {
    bottom: 100%;
  }
  80% {
    bottom: 100%;
  }
  100% {
    bottom: 0%;
  }
}

@keyframes flicker {
  $steps: 1;
  @for $i from 0 through $steps {
    #{percentage($i* calc(1/$steps))} {
      opacity: 0.98;
    }
  }
}
</style>
