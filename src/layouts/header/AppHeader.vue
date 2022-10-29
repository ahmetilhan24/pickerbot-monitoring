<template>
  <header class="header flex--row row--middle--center">
    <img class="header__logo" src="@/assets/img/logo.svg" alt="" />
    <div class="header__buttons flex--row row--middle--center">
      <a class="btn-border" href="https://github.com/ahmetilhan24">
        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"
          />
        </svg>
      </a>
      <a class="btn-border" href="https://github.com/sponsors/ahmetilhan24"
        >Support
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <path
            stroke="#FF346E"
            stroke-width="1.5"
            d="M11.4697 5.24605L12 5.77637L12.5303 5.24605C14.5251 3.25131 17.7592 3.25132 19.7539 5.24606C21.7487 7.24081 21.7487 10.4749 19.7539 12.4697L12.8839 19.3398C12.3958 19.8279 11.6043 19.8279 11.1161 19.3398L4.24607 12.4697C2.25132 10.4749 2.25132 7.24081 4.24607 5.24606C6.24081 3.25132 9.47493 3.25131 11.4697 5.24605Z"
          />
        </svg>
      </a>
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
      svg {
        width: 20px;
      }
      &:nth-of-type(1) {
        background-color: $dark-one;
        svg {
          fill: $white;
        }
      }
      &:nth-of-type(2) {
        svg {
          margin-left: 4px;
        }
      }
    }
  }
}
</style>
