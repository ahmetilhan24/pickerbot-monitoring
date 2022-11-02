<template>
  <main class="default-layout">
    <app-header />
    <slot></slot>
    <app-footer />
  </main>
</template>

<script>
import AppHeader from "./partials/AppHeader.vue";
import AppFooter from "./partials/AppFooter.vue";
export default {
  name: "DefaultLayout",
  components: { AppHeader, AppFooter },
};
</script>

<style lang="scss" scoped>
.default-layout {
  width: 100%;
  max-width: $max-width-one;
  padding: 0 20px;
}
</style>
