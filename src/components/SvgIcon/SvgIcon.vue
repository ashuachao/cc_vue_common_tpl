<template>
  <svg :class="svgClass" aria-hidden="true">
    <!-- use tag to deepclone -->
    <use :xlink:href="symbolId" :fill="color" />
  </svg>
</template>


<style scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  position: relative;
  fill: currentColor;
  vertical-align: -2px;
}
</style>
<script>
import { computed, defineComponent } from "vue";
export default defineComponent({
  props: {
    name: {
      type: String,
      require: true,
    },
    className: {
      type: String,
      default: "",
    },
    color: {
      type: String,
      default: "#333",
    },
  },
  setup(props) {
    return {
      symbolId: computed(() => {
        return `#icon-${props.name}`;
      }),
      svgClass: computed(() => {
        if (props.className) {
          return `svg-icon ${props.className}`;
        }
        return "svg-icon";
      }),
    };
  },
});
</script>
