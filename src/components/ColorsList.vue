<script setup lang="ts">
import { ref, computed, onUpdated } from "vue";
import colorsList from "../assets/colorsList.json";
import { useGeneralStore } from "../store";

const generalStore = useGeneralStore();
const getDefaultColor = computed(() => generalStore.getDefaultColor);
const colors = ref(colorsList);

const onColorChangeClick = (colorCode: string) => {
  generalStore.setDefaultColor(colorCode);
  document.body.style.setProperty("--primary-color", getDefaultColor.value);
};
</script>

<template>
  <div class="colors-list">
    <div
      class="color-wrapper"
      v-for="color in colors['colors-list']"
      :key="color.id"
    >
      <div
        @click="onColorChangeClick(color.code)"
        :style="{
          backgroundColor: color.code,
          boxShadow: `0 0 3px ${color.code}`,
        }"
        class="color"
      ></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../styles/global.scss";
@import "../styles/mixins.scss";
@import "../styles/variables.scss";

.colors-list {
  @include display-flex(row, center, center, 20px, wrap);

  .color-wrapper {
    padding: 5px;
    border: 2px solid var(--primary-color);
    box-shadow: 0 0 3px var(--primary-color);

    .color {
      width: 50px;
      height: 80vh;
      cursor: pointer;

      &:hover {
        filter: saturate(0);
      }
    }
  }
}
</style>
