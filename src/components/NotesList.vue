<script setup lang="ts">
import { computed, ComputedRef } from "vue";
import { useFirebaseStore } from "../store/firebaseStore";
import AlertModal from "./AlertModal.vue";
import Note from "./Note.vue";

const firebaseStore = useFirebaseStore();

const user = computed(() => firebaseStore.getUser);
const userNotes: ComputedRef<{}> = computed(() => firebaseStore.getUserNotes);
</script>

<template>
  <div v-if="user.uid?.length" class="note-wrapper">
    <Note v-for="note in userNotes" :key="note.id" :note="note" />
  </div>
  <div v-else>
    <AlertModal warningMessage="Please log in for your data ..." />
  </div>
</template>

<style lang="scss" scoped>
@import "../styles/mixins.scss";
@import "../styles/variables.scss";

.no-login-msg {
  color: var(--primary-color);
}

.note-wrapper {
  @include display-flex(row, center, flex-start, 20px, wrap);
}
</style>
