<template>
  <div class="column-chart">
    <svg id="svg_elem" v-if="chartIsReady">
      <g
        @mouseover="hoverTooltip($event)"
        class="column"
        v-for="(item, index) in 80"
        :key="item"
      >
        <rect height="100" :width="svg.rectWidth" :x="svg.rectX * index"></rect>
      </g>
    </svg>
    <div
      class="chart-tooltip flex--row row--middle--center"
      :style="{ left: tooltip.position.left }"
    >
      Tooltip
    </div>
  </div>
</template>
<script>
import chartMixin from "@/mixins/chart.mixin";
export default {
  name: "ColumnChart",
  data() {
    return {
      per: 80,
      svg: {
        rectWidth: NaN,
        rectX: NaN,
      },
      chartIsReady: true, //bind to res
    };
  },
  mixins: [chartMixin],
  methods: {
    getRectWidth() {
      const svgElem = document.getElementById("svg_elem");
      if (svgElem?.clientWidth) {
        this.svg.rectWidth =
          svgElem?.clientWidth / this.per - svgElem?.clientWidth / this.per / 2;
        this.svg.rectX = svgElem?.clientWidth / this.per;
      }
    },
  },
  mounted() {
    this.getRectWidth();
  },
};
</script>
<style lang="scss" scoped>
.column-chart {
  width: 100%;
  position: relative;
  svg {
    width: 100%;
    overflow-x: auto;
    .column {
      &:hover {
        rect {
          fill: $primary-color-light;
        }
      }
      rect {
        fill: $primary-color;
      }
    }
  }
  &:hover {
    .chart-tooltip {
      visibility: visible;
    }
  }
}
</style>
