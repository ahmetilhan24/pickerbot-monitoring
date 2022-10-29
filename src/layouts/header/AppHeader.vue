<template>
  <header class="header flex--row row--middle--center">
    <img class="header__logo" src="@/assets/img/logo.svg" alt="" />
    <div class="header__buttons flex--row row--middle--center">
      <a class="btn-border" href="https://github.com/ahmetilhan24">Github</a>
      <a class="btn-border" href="https://github.com/sponsors/ahmetilhan24"
        >Sponsor <img src="@/assets/img/icons/heart.svg" alt=""
      /></a>
    </div>
  </header>
</template>
<script>
export default {
  name: "AppHeader",
};
</script>
<style lang="scss" scoped>
.header {
  width: 100%;
  padding: 30px 0;
  justify-content: space-between;
  &__logo {
    width: 45px;
  }
  &__buttons {
    a {
      margin: 0 5px;
      img {
        width: 20px;
        margin-left: 4px;
      }
    }
  }
}
</style>
