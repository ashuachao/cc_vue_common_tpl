<template>
  <div class="emotionItem" :class="needAnimation ? 'active' : ''">
    <SvgIcon :svgName="emoOption.type" color="#567"></SvgIcon>
  </div>
</template>
<script lang="ts" setup>
interface Props {
  emoOption: ComponentType.EmotionOption;
}
let { emoOption } = withDefaults(defineProps<Props>(), {});
let needAnimation = ref<boolean>(false);
watch(
  () => {
    return emoOption.type;
  },
  () => {
    needAnimation.value = true;
  }
);
</script>
<style scope>
.emotionItem {
  width: 2rem;
  height: 2rem;
  will-change: transform;
  /* transform: scale(0); */
}
.emotionItem.active {
  animation: 5s linear emotionRun;
}

@keyframes emotionRun {
  0% {
    transform: translateY(100%) scale(0);
  }
  50% {
    transform: translateY(-50%) scaleX(1.5);
  }
  75% {
    transform: translateY(0) scaleX(1);
  }
  100% {
    transform: translateY(0) scaleX(1);
  }
}
</style>
