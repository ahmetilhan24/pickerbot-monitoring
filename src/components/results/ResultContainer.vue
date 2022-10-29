<template>
  <section class="result-container flex--column column--middle--center">
    <operational-result />
    <router-link class="req-detail" to="">Request Detail</router-link>
  </section>
</template>

<script>
import OperationalResult from "./OperationalResult.vue";

export default {
  name: "ResultContainer",
  components: { OperationalResult },
};
</script>
<style lang="scss" scoped>
.result-container {
  width: 100%;
  padding: 100px 0;
  text-align: center;
  .req-detail {
    margin-top: 10px;
    color: $dark-two;
  }
  :deep() {
    svg {
      width: 100px;
    }
    h2 {
      font-size: 32px;
      margin-top: 20px;
    }
  }
}
</style>
