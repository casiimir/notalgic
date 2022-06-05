<script setup lang="ts">
import { useRouter } from "vue-router";
import { ref } from "vue";
import { useGeneralStore } from "../store";

const { navbarTitle } = defineProps({
  navbarTitle: {
    type: String,
    required: false,
    default: "",
  },
});

const generalStore = useGeneralStore();
const localDate = ref(new Date().toISOString().split("T")[0]);
const router = useRouter();

const titleInput = ref({ value: "" });
</script>

<template>
  <nav class="navbar">
    <p v-if="navbarTitle.length" class="title-default">{{ navbarTitle }}</p>
    <p v-else>
      <input
        class="title-input"
        type="text"
        :value="titleInput.value"
        @input="(e) => (titleInput.value = e.target.value)"
        :style="{ fontFamily: `${generalStore.getFontFamily}` }"
        placeholder="Title here ..."
      />
    </p>
    <div class="date">
      <router-link to="/">
        <p class="to-home">&#8962;</p>
      </router-link>

      <router-link to="/new-note">
        <p class="to-new-note">&#951;</p>
      </router-link>

      <router-link to="/fonts">
        <p class="to-fonts">&#945;</p>
      </router-link>

      <router-link to="/colors">
        <p class="to-colors">&#950;</p>
      </router-link>

      <p>{{ localDate }}</p>
    </div>
  </nav>
  <div class="wrapper">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
@import "../styles/global";
@import "../styles/variables";
@import "../styles/mixins";

.navbar {
  @include display-flex(row, space-between, center);

  margin: 0 20% 80px;
  padding: 5px 10px;

  background: var(--primary-color);
  font-size: 1.2rem;
  font-weight: bold;
  text-shadow: 0 0 1px $bg-dark-grey-color;
  box-shadow: 0 0 3px var(--primary-color);

  p {
    margin: 0;
  }

  .title-default,
  .title-input {
    text-transform: uppercase;
    font-size: 1.5rem;
    font-weight: bold;
  }

  .title-input {
    margin: 0;
    padding: 0;
    background: transparent;
    border: 0;

    &:focus {
      outline: none;
    }
  }

  .date {
    @include display-flex(row, center, center, 10px);

    a {
      text-decoration: none;
      color: $bg-dark-grey-color;
    }

    .to-home,
    .to-fonts,
    .to-colors,
    .to-new-note {
      padding: 0 4px;
      font-size: 2rem;
      cursor: pointer;
      transition: all 0.35s;

      &:active {
        background: $bg-dark-grey-color;
        color: var(--primary-color);
      }
    }
  }
}

.wrapper {
  margin: 20px 20%;
}
</style>
