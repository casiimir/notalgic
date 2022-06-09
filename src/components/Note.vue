<script setup lang="ts">
import { useRouter } from "vue-router";
import { computed } from "vue";

const { note } = defineProps(["note"]);
const router = useRouter();

const formatTitleInUrl = (title: string) => title.replaceAll(" ", "%2D");

const onCardClick = () =>
  router.push(`/reader/${formatTitleInUrl(note.title)}`);
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
@import "../styles/global.scss";
@import "../styles/mixins.scss";
@import "../styles/variables.scss";

.note {
  padding: 14px 2px 0;
  min-width: 240px;
  border: 1px solid var(--primary-color);
  color: var(--primary-color);

  text-shadow: 0 0 1px var(--primary-color);
  box-shadow: 0 0 3px var(--primary-color);
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
    background: var(--primary-color);
    color: $bg-dark-grey-color;
    font-weight: bold;
    text-shadow: 0 0 1px $bg-dark-grey-color;
    transition: all 0.7s;
  }

  &:hover {
    background: var(--primary-color);
    color: $bg-dark-grey-color;

    .title {
      background: $bg-dark-grey-color;
      color: var(--primary-color);
    }
  }
}
</style>
