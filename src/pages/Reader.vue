<script setup lang="ts">
import { ref, computed, Ref, onMounted } from "vue";
import { Router, useRouter } from "vue-router";
import { useFirebaseStore } from "../store/firebaseStore";

import DefaultLayout from "../layouts/DefaultLayout.vue";
import NoteText from "../components/NoteText.vue";
import { Note } from "../types/generic";

const router: Router = useRouter();
const firebaseStore = useFirebaseStore();
const userNotes: any = computed(() => firebaseStore.getUserNotes);
const formatTitleFromUrl = (title: string) => title.replaceAll("-", " ");

const getNoteByQueryParam = computed(() =>
  userNotes.value.length
    ? userNotes.value.find(
        (note: Note) =>
          note.title ===
          formatTitleFromUrl(router.currentRoute.value.params.id as string)
      )
    : router.push("/")
);

onMounted(() => !userNotes.value.length && router.push("/"));
</script>

<template>
  <DefaultLayout :navbarTitle="getNoteByQueryParam.title">
    <NoteText :note="getNoteByQueryParam" />
  </DefaultLayout>
</template>

<style lang="scss" scoped>
@import "../styles/global.scss";
@import "../styles/variables.scss";
</style>
