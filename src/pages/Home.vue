<script setup lang="ts">
import NotesList from "../components/NotesList.vue";
import DefaultLayout from "../layouts/DefaultLayout.vue";
</script>

<template>
  <DefaultLayout navbarTitle="Documents list">
    <NotesList />
  </DefaultLayout>
</template>

<style lang="scss">
@import "../styles/global.scss";
@import "../styles/variables.scss";
</style>
