<script setup lang="ts">
import { useRouter } from "vue-router";
import { computed, ref } from "vue";
import { useGeneralStore } from "../store";
import { useFirebaseStore } from "../store/firebaseStore";

const { navbarTitle } = defineProps({
  navbarTitle: {
    type: String,
    required: false,
    default: "",
  },
});

const router = useRouter();
const generalStore = useGeneralStore();
const firebaseStore = useFirebaseStore();
const localDate = ref(new Date().toISOString().split("T")[0]);
const titleInput = ref({ value: "" });
const getUserByFirebase = computed(() => firebaseStore.getUser);

const loginByGoogle = () => firebaseStore.setUserByGoogle();
const signOutByGoogle = () => firebaseStore.removeUserByGoogle();
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

      <p
        v-if="!getUserByFirebase.uid"
        @click="loginByGoogle"
        class="login-by-google"
      >
        +
      </p>
      <p v-else @click="signOutByGoogle" class="login-by-google">-</p>

      <div class="user-info">
        <p v-if="getUserByFirebase.uid">{{ getUserByFirebase.email }}</p>
        <p v-else>No user logged ..</p>
        <p>{{ localDate }}</p>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
@import "../styles/global.scss";
@import "../styles/mixins.scss";
@import "../styles/variables.scss";

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
    .to-new-note,
    .login-by-google {
      padding: 0 4px;
      font-size: 2rem;
      cursor: pointer;
      transition: all 0.35s;

      &:active {
        background: $bg-dark-grey-color;
        color: var(--primary-color);
      }
    }

    .user-info {
      @include display-flex(column, center, flex-end);
      font-size: 1rem;
    }
  }
}
</style>
