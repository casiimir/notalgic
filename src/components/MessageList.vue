<script setup lang="ts">
import noteListMock from "../assets/mock.json";
import { ref } from "vue";

const noteList = noteListMock["note-list"];
</script>

<template>
  <div v-for="note in noteList" :key="note.id">
    <h1>{{ note.title }}</h1>
  </div>
</template>

<style scoped lang="scss"></style>
