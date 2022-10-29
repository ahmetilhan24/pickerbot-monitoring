<template>
  <div class="monitoring-view">
    <result-container />
    <response-time-graph />
    <uptime-graph />
  </div>
</template>

<script>
import ResultContainer from "@/components/results/ResultContainer.vue";
import ResponseTimeGraph from "@/components/sections/ResponseTimeGraph.vue";
import UptimeGraph from "@/components/sections/UptimeGraph.vue";
export default {
  name: "MonitoringView",
  components: { ResultContainer, ResponseTimeGraph, UptimeGraph },
};
</script>
, Li, UptimeGraphneChart
