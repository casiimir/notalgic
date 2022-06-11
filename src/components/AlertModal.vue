<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useGeneralStore } from "../store";
import { useFirebaseStore } from "../store/firebaseStore";
import { v4 as uuidv4 } from "uuid";

const props = defineProps({
  warningMessage: {
    type: String,
    required: true,
  },
});

const router = useRouter();
const generalStore = useGeneralStore();
const firebaseStore = useFirebaseStore();
const textareaInput = ref({ value: "" });
</script>

<template>
  <div class="wrapper">
    <h3>WARNING</h3>
    <h2>{{ warningMessage }}</h2>
  </div>
</template>

<style lang="scss" scoped>
@import "../styles/global.scss";
@import "../styles/mixins.scss";
@import "../styles/variables.scss";

.wrapper {
  position: absolute;
  top: calc(50vh - 100px);
  left: calc(50vw - 270px);
  width: 270px;
  height: 100px;
  padding: 10px 60px;
  background: #ff3300;
}
</style>
