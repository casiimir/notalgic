<script setup lang="ts">
import { useRouter } from "vue-router";
import { computed } from "vue";

const { note } = defineProps(["note"]);
const router = useRouter();

const onCardClick = () => router.push(`/reader/${note.id - 1}`);
</script>

<template>
  <div class="note" @click="onCardClick">
    <div class="infos">
      <p>{{ note.time }}</p>
      <p>LENGHT: {{ note.content.length }} CHARS.</p>
    </div>
    <p class="title">{{ note.title.toUpperCase() }}</p>
  </div>
</template>

<style scoped lang="scss">
@import "../styles/mixins.scss";
@import "../styles/variables.scss";

.note {
  padding: 14px 2px 0;
  min-width: 240px;
  border: 1px solid $primary-green-color;
  color: $primary-green-color;

  text-shadow: 0 0 1px $primary-green-color;
  box-shadow: 0 0 3px $primary-green-color;
  cursor: pointer;
  transition: all 0.35s;

  .infos {
    p {
      margin: 5px 0;
      padding: 0 0 0 25px;
    }
  }

  .title {
    margin: 5px 0;
    padding: 5px;
    background: $primary-green-color;
    color: $bg-dark-grey-color;
    font-weight: bold;
    text-shadow: 0 0 1px $bg-dark-grey-color;
    transition: all 0.7s;
  }

  &:hover {
    background: $primary-green-color;
    color: $bg-dark-grey-color;

    .title {
      background: $bg-dark-grey-color;
      color: $primary-green-color;
    }
  }
}
</style>
