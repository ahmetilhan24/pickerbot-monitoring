<template>
  <div class="monitoring-view">
    <result-container />
    <response-time-graph />
  </div>
</template>

<script>
import ResultContainer from "@/components/results/ResultContainer.vue";
import ResponseTimeGraph from "@/components/sections/ResponseTimeGraph.vue";
export default {
  name: "MonitoringView",
  components: { ResultContainer, ResponseTimeGraph },
};
</script>
