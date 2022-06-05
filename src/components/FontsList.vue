<script setup lang="ts">
import { ref } from "vue";
import fontsList from "../assets/fontsList.json";
import { useGeneralStore } from "../store";

const generalStore = useGeneralStore();
const fonts = ref(fontsList);

const onFontNameClick = (fontName: string) =>
  generalStore.setFontFamily(fontName);
</script>

<template>
  <table class="font-table">
    <tr v-for="font in fonts['fonts-list']" :key="font.id">
      <td
        @click="onFontNameClick(font.name)"
        :style="{ fontFamily: `${font.name}` }"
      >
        {{ font.name }}
      </td>
      <td>by {{ font.author }}</td>
    </tr>
  </table>
</template>

<style lang="scss" scoped>
@import "../styles/global.scss";
@import "../styles/variables.scss";

.font-table {
  @include display-flex(column, center);
  padding: 0 60px;
  letter-spacing: 1.6px;
  line-height: 1.4em;

  tr {
    @include display-flex(row, space-between);

    width: 100%;
    color: var(--primary-color);
    text-shadow: 0 0 1px var(--primary-color);

    td {
      &:nth-of-type(1) {
        text-decoration: underline;
        cursor: pointer;

        &:active {
          background: var(--primary-color);
          color: $bg-dark-grey-color;
        }
      }
    }
  }
}
</style>
