
<template>
  <div class="wrapper">
    <div>this is Index{{ generateTitle("navbar.Home") }}</div>
    <SvgIcon name="test" color="#567"></SvgIcon>
    <div>{{ imageList.bannerImg }}</div>
    <div>{{ imageList.bgImg }}</div>
    <div>{{ imageList.footImg }}</div>
    <!-- <img :src= > <img :src= > -->
    <div class="item_wrapper">
      <div class="item" v-for="item in bannerList" :key="item.title">
        {{ item.title }}11
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, toRefs } from "vue";
import api from "@/helpers/api";
import useI18n from "@/helpers/hooks/useI18n";
const { generateTitle } = useI18n();
// 定义页面需要的响应式数据流
let state = reactive({
  imageList: {} as LayoutType.ImageList,
  bannerList: [] as Array<LayoutType.BannerListItem>,
});
let comName = "index";
// 初始化响应式imglist && 获取当前页面的背景图列表
api.getImage(comName).then((res) => {
  state.imageList = res;
});
// bannerList && 获取当前页面的banner列表
api.getBannerList(comName).then((res) => {
  state.bannerList = res;
});
const { imageList, bannerList } = toRefs(state);
</script>

<style scoped>
</style>
