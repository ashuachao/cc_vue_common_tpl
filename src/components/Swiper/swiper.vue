<template>
  <swiper
    :modules="modules"
    :slides-per-view="1"
    :space-between="50"
    :pagination="{
      clickable: true,
      bulletClass: 'my-bullet',
      bulletActiveClass: 'my-bullet-active',
    }"
    @swiper="onSwiper"
    :swiper-option="swiperOption"
  >
    <!-- :autoplay="{ delay: 4500 }" -->
    <swiper-slide v-for="item in swiperOption.swiperItems" :key="item.name"
      ><div class="swiperItem">
        <!-- @mouseenter="toggle_autoplay(false)"
        @mouseleave="toggle_autoplay(true)" -->
        <img :src="item.link" />
        <div class="swiperItemDesc">
          <div class="name">{{ item.name }}</div>
          <div class="subName">{{ item.subName }}</div>
          <el-button
            v-if="item.method"
            color="#fc754c"
            class="btn"
            @click="item.mCallback?.()"
            >{{ item.method }}</el-button
          >
        </div>
      </div></swiper-slide
    >
  </swiper>
</template>

<script setup lang="ts">
import { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
interface Props {
  swiperOption: ComponentType.swiperOptionType;
}
let { swiperOption } = withDefaults(defineProps<Props>(), {});
let modules = [Pagination, Autoplay];
let autoFlag = true;
let swiperInstance = {} as any;
const onSwiper = (swiper: any) => {
  swiperInstance = swiper;
};
let toggle_autoplay = (status: boolean) => {
  if (autoFlag != status) {
    if (autoFlag) {
      swiperInstance?.autoplay.stop();
      autoFlag = false;
    } else {
      swiperInstance?.autoplay.start();
      autoFlag = true;
    }
  }
};
</script>

<style>
.swiperItem {
  position: relative;
  height: 5rem;
}
.swiperItem img {
  width: 100%;
  height: 100%;
}
.swiperItemDesc {
  position: absolute;
  left: 2rem;
  top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.swiperItemDesc .name {
  font-size: 0.4rem;
  margin-bottom: 0.1rem;
}
.swiperItemDesc .subName {
  font-size: 0.2rem;
  margin-bottom: 0.1rem;
}
.swiperItemDesc .btn {
  width: 1rem;
  height: 0.4rem;
  margin: 0.1rem 0;
  color: #fff;
}
.my-bullet {
  cursor: pointer;
  display: inline-block;
  width: 0.3rem;
  height: 0.05rem;
  margin: 0 4px;
  background: #c5c6ca;
}
.my-bullet-active {
  background: #fc754c;
}
</style>
