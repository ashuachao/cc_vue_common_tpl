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
<script setup lang="ts">
import { computed, defineComponent } from "vue";
interface Props {
  name: string;
  className: string;
  color: string;
}
let { name, className, color } = withDefaults(defineProps<Props>(), {});
let symbolId = computed(() => {
  return `#icon-${name}`;
});
let svgClass = computed(() => {
  if (className) {
    return `svg-icon ${className}`;
  }
  return "svg-icon";
});
</script>
