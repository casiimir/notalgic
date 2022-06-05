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
  margin: -40px 0 0 0;
  padding: 0 0 0 10px;

  color: var(--primary-color);
  font-size: 1.2rem;
  line-height: 1.7rem;
  text-shadow: 0 0 1px var(--primary-color);

  p {
    text-align: justify;
  }
}
</style>
