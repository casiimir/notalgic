<script setup lang="ts">
import { ref } from "vue";

const { note } = defineProps(["note"]);
</script>

<template>
  <div class="note">
    <p>{{ note.content }}</p>
  </div>
</template>

<style lang="scss" scoped>
@import "../styles/global.scss";
@import "../styles/variables.scss";

.note {
  color: $primary-green-color;
  text-shadow: 0 0 1px $primary-green-color;
  line-height: 1.8rem;
  font-size: 1.2rem;

  p {
    text-align: justify;
  }
}
</style>
