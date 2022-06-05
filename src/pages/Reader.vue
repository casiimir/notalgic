<script setup lang="ts">
import { ref, computed, Ref } from "vue";
import { Router, useRouter } from "vue-router";
import { Note, NoteList } from "../types/generic";

import DefaultLayout from "../layouts/DefaultLayout.vue";
import NoteText from "../components/NoteText.vue";
import noteListMock from "../assets/mock.json";

const router: Router = useRouter();
const noteList: Ref<NoteList> = ref(noteListMock["note-list"]);

const getNoteByParam = computed(
  () => noteList.value[router.currentRoute.value.params.id as any]
);
</script>

<template>
  <DefaultLayout :navbarTitle="getNoteByParam.title">
    <NoteText :note="getNoteByParam" />
  </DefaultLayout>
</template>

<style lang="scss" scoped>
@import "../styles/global.scss";
@import "../styles/variables.scss";
</style>
