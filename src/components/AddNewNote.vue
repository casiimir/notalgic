<script setup lang="ts">
import { ref } from "vue";
import { useGeneralStore } from "../store";

const generalStore = useGeneralStore();
const textareaInput = ref({ value: "" });
</script>

<template>
  <div class="editor">
    <textarea
      :style="{ fontFamily: `${generalStore.getFontFamily}` }"
      class="content"
      name="content-element"
      cols="30"
      rows="10"
      :value="textareaInput.value"
      @input="(e) => (textareaInput.value = e.target.value)"
      placeholder="Add the content here ..."
    ></textarea>
  </div>
</template>

<style lang="scss" scoped>
@import "../styles/global.scss";
@import "../styles/mixins.scss";
@import "../styles/variables.scss";

.editor {
  height: 70vh;

  .content {
    margin: -40px 0 0 0;
    padding: 0 0 0 10px;
    border: 0;
    width: 100%;
    height: 100%;

    background: transparent;
    color: var(--primary-color);
    font-size: 1.2rem;
    line-height: 1.7rem;
    resize: none;

    &:focus {
      outline: none;
    }
  }
}
</style>
