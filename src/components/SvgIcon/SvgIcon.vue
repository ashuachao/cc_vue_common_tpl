<template>
  <svg :class="svgClass" aria-hidden="true">
    <use :xlink:href="symbolId" :fill="color" />
  </svg>
</template>
  <script setup lang="ts">
interface Props {
  svgName: string;
  color: string;
}
const SVGprops = withDefaults(defineProps<Props>(), {});
let { svgName, color } = toRefs(SVGprops);
let symbolId = computed(() => {
  return `#icon-${svgName.value}`;
});
let svgClass = computed(() => {
  return "svg-icon";
});
</script>
<style scoped>
.svg-icon {
  width: 100%;
  height: 100%;
  position: relative;
  fill: currentColor;
  vertical-align: -2px;
}
</style>
