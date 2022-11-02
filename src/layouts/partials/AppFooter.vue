<template>
  <footer class="footer flex--row row--middle--center">
    <div class="footer__left">
      <span class="version">v{{ appVersion }}</span>
    </div>
    <div class="footer__right">
      <span>Coded by <a href="#">Ahmet İlhan</a></span>
    </div>
  </footer>
</template>
<script>
import packageJson from "../../../package.json";
export default {
  name: "AppFooter",
  data() {
    return {
      appVersion: packageJson.version,
    };
  },
};
</script>

<style lang="scss" scoped>
.footer {
  width: 100%;
  font-weight: 500;
  color: $dark-two;
  justify-content: space-between;
  padding: 50px 0;
}
</style>
