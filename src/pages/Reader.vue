<script setup lang="ts">
import { ref, computed, Ref, onMounted } from "vue";
import { Router, useRouter } from "vue-router";
import { useFirebaseStore } from "../store/firebaseStore";

import DefaultLayout from "../layouts/DefaultLayout.vue";
import NoteText from "../components/NoteText.vue";

const router: Router = useRouter();
const firebaseStore = useFirebaseStore();
const userNotes: any = computed(() => firebaseStore.getUserNotes);

const getNoteByParam = computed(
  () => userNotes.value[router.currentRoute.value.params.id as any]
);

onMounted(() => !userNotes.value.length && router.push("/"));
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
