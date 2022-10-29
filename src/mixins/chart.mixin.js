export default {
  data() {
    return {
      tooltip: {
        position: {
          left: 0,
          top: 0,
        },
      },
    };
  },
  methods: {
    hoverTooltip(e) {
      this.tooltip.position.left = e.offsetX + "px";
      console.log(e);
    },
  },
};
