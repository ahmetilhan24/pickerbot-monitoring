<template>
  <div class="line-chart">
    <svg>
      <polyline
        fill="none"
        stroke="#00DF4D"
        stroke-width="2"
        points="
       00,80
       20,80
       40,80
       60,80
       80,80
       100,80
       120,60
       140,80
       160,90
       180,80
       200, 80
       220, 80
       240, 70
       260, 100
       280, 100
       300, 80
       320, 80
       340, 100
       360, 100
       380, 80
       400, 80
       420, 70
       440, 80
       460, 80
       480, 80
       500, 80
       520, 80
       540, 80
       560, 80
       580, 80
       600, 80
       620, 80
       640, 80
       660, 80
       680, 80
       700, 80
       720, 80
       740, 80
       760, 80
       780, 80
       800, 80
       820, 80
       840, 80
       860, 120
       880, 80
       900, 100
       920, 60
       940, 80
       960, 80
       980, 80
     "
      />
      <g>
        <circle @mouseover="hoverTooltip($event)" cx="00" cy="80" r="3" />
        <circle @mouseover="hoverTooltip($event)" cx="20" cy="80" r="3" />
        <circle @mouseover="hoverTooltip($event)" cx="40" cy="80" r="3" />
        <circle @mouseover="hoverTooltip($event)" cx="60" cy="80" r="3" />
        <circle @mouseover="hoverTooltip($event)" cx="80" cy="80" r="3" />
        <circle @mouseover="hoverTooltip($event)" cx="100" cy="80" r="3" />
        <circle @mouseover="hoverTooltip($event)" cx="120" cy="60" r="3" />
        <circle @mouseover="hoverTooltip($event)" cx="140" cy="80" r="3" />
        <circle @mouseover="hoverTooltip($event)" cx="160" cy="90" r="3" />
        <circle @mouseover="hoverTooltip($event)" cx="180" cy="80" r="3" />
        <circle @mouseover="hoverTooltip($event)" cx="200" cy="80" r="3" />
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
  name: "LineChart",
  mixins: [chartMixin],
};
</script>

<style lang="scss" scoped>
.line-chart {
  width: 100%;
  position: relative;
  svg {
    width: 100%;
    polyline {
      fill: $primary-color-light;
    }
    g {
      circle {
        stroke: $dark-two;
        stroke-width: 2px;
        fill: $dark-one;
        transition: all 0.1s linear;
        &:hover {
          stroke-width: 6px;
        }
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
