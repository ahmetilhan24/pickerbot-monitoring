<template>
  <section
    class="response-time-graph section flex--column column--middle--left"
  >
    <h3 class="section-title">Response Time</h3>
    <column-chart />
  </section>
</template>
<script>
import ColumnChart from "../charts/ColumnChart.vue";
export default {
  name: "ResponseTimeGraph",
  components: { ColumnChart },
};
</script>
<style lang="scss" scoped>
.response-time-graph {
  width: 100%;
}
</style>
