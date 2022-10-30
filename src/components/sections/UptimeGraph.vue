<template>
  <section
    class="response-time-graph section flex--column column--middle--left"
  >
    <h3 class="section-title">Uptime</h3>
    <line-chart />
  </section>
</template>
<script>
import LineChart from "../charts/LineChart.vue";
export default {
  name: "UptimeGraph",
  components: { LineChart },
};
</script>
<style lang="scss" scoped>
.uptime-graph {
  width: 100%;
}
</style>
