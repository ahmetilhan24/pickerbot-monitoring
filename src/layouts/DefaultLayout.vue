<template>
  <main class="default-layout">
    <app-header />
    <slot></slot>
  </main>
</template>

<script>
import AppHeader from "./header/AppHeader.vue";
export default {
  name: "DefaultLayout",
  components: { AppHeader },
};
</script>

<style lang="scss" scoped>
.default-layout {
  width: 100%;
  max-width: $max-width-one;
}
</style>
