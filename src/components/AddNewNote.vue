<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useGeneralStore } from "../store";
import { useFirebaseStore } from "../store/firebaseStore";
import { v4 as uuidv4 } from "uuid";

import AlertModal from "./AlertModal.vue";

const router = useRouter();
const generalStore = useGeneralStore();
const firebaseStore = useFirebaseStore();
const textareaInput = ref({ value: "" });

const onAddNewNote = () => {
  firebaseStore.addNoteToDB({
    collection: firebaseStore.getUser.uid,
    document: generalStore.noteTitle,
    data: {
      title: generalStore.noteTitle,
      content: textareaInput.value.value,
      id: uuidv4(),
      time: new Date().toISOString().split("T")[0],
    },
  });
  if (textareaInput.value.value.length && generalStore.noteTitle.length) {
    textareaInput.value.value = "";
    generalStore.setNoteTitle("");
    router.push("/");
  }
};

const onInputContent = (e: any) => (textareaInput.value = e?.target?.value);
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
      @input="onInputContent"
      placeholder="Add the content here ..."
      required
    ></textarea>
    <button v-if="firebaseStore.getUser.uid" @click="onAddNewNote">
      ADD <i class="fas fa-notes-medical"></i>
    </button>
    <AlertModal
      v-if="!textareaInput.value.length && !generalStore.noteTitle.length"
      warningMessage="Add title and/or content!"
    />
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
