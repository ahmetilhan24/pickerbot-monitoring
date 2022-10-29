<template>
  <div class="monitoring-view">
    <result-container />
  </div>
</template>

<script>
import ResultContainer from "@/components/results/ResultContainer.vue";
export default {
  name: "MonitoringView",
  components: { ResultContainer },
};
</script>
