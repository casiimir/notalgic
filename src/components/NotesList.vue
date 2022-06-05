<script setup lang="ts">
import Note from "./Note.vue";
import noteListMock from "../assets/mock.json";
import { ref } from "vue";

const noteList = noteListMock["note-list"];
</script>

<template>
  <div class="note-wrapper">
    <Note v-for="note in noteList" :key="note.id" :note="note" />
  </div>
</template>

<style scoped lang="scss">
@import "../styles/mixins.scss";
@import "../styles/variables.scss";

.note-wrapper {
  @include display-flex(row, center, flex-start, 20px, wrap);
}
</style>
