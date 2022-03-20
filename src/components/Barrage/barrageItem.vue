<template>
  <div class="barrageItemWrapper" :class="itemOption.id" ref="wrapperDom">
    {{ itemOption.value }}
  </div>
</template>
<script lang="ts" setup>
interface Props {
  itemOption: ComponentType.BarrageItem;
}
let { itemOption } = withDefaults(defineProps<Props>(), {});
let wrapperDom = ref<HTMLElement | null>(null);
onMounted(() => {
  let parentWidth = Number(localStorage.getItem("parentWidth"));
  let itemWidth = wrapperDom.value?.getBoundingClientRect().width || 0;
  let keyframeStr = `@keyframes barrageRun {
      from {
          visibility: visible;
        transform: translate3d(${parentWidth + itemWidth}px, 0, 0);
      }
      to {
          visibility: visible;
        transform: translate3d(-100%, 0, 0);
      }
    }
    .barrageItemWrapper.${itemOption.id}{
        animation-delay:${itemOption.delay}s}`;
  let style = document.createElement("style");
  style.innerHTML = keyframeStr;
  wrapperDom.value?.appendChild(style);
});
</script>
<style>
.barrageItemWrapper {
  position: absolute;
  left: 0;
  font-size: 0.2rem;
  margin-right: 0.2rem;
  will-change: transform;
  visibility: hidden;
  animation: 5s barrageRun linear;
}
</style>
