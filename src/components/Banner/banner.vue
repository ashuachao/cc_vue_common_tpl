<template>
  <div class="bannerTplWrapper">
    <img :src="bannerOption.bgImg" />
    <div class="bannerDesc">
      <div class="name">{{ bannerOption.title }}</div>
      <div class="subName">{{ bannerOption.subTitle }}</div>
      <el-button
        v-if="bannerOption.method"
        color="#fc754c"
        class="btn"
        @click="bannerOption.mCallback?.()"
        >{{ bannerOption.method }}</el-button
      >
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  bannerOption: ComponentType.BannerOptionType;
}
let { bannerOption } = withDefaults(defineProps<Props>(), {});
</script>

<style scoped>
.bannerTplWrapper {
  position: relative;
}
.bannerTplWrapper img {
  width: 100%;
  height: 100%;
}
.bannerDesc {
  position: absolute;
  left: 2rem;
  top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.bannerDesc .name {
  font-size: 0.4rem;
  margin-bottom: 0.1rem;
}
.bannerDesc .subName {
  font-size: 0.2rem;
  margin-bottom: 0.1rem;
}
.bannerDesc .btn {
  width: 1rem;
  height: 0.4rem;
  margin: 0.1rem 0;
  color: #fff;
}
</style>
