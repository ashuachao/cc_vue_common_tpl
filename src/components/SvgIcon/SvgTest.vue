<template>
  {{ props.svgName1 }}
</template>
  <script setup lang="ts">
interface Props {
  svgName1: any;
}
let props = toRefs(withDefaults(defineProps<Props>(), {}));
// let { svgName1 } = toRefs(props);
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
