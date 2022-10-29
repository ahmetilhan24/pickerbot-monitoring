<template>
  <default-layout>
    <router-view />
  </default-layout>
</template>
<script>
import DefaultLayout from "./layouts/DefaultLayout.vue";

export default {
  name: "App",
  components: { DefaultLayout },
};
</script>
<style lang="scss">
@import "./assets/styles/sass/_theme.scss";
</style>
