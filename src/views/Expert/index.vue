<template>
  <div class="a">
    <Swiper :swiperOption="swiperOption" />
    <div>i am expert</div>
  </div>
</template>

<script setup lang="ts">
import * as types from "tsType/type.component.td";
import data from "./index.data";
let state = reactive({
  swiperOption: {} as types.swiperOptionType,
});
// hooks, add callback of method
state.swiperOption.swiperItems = data.swiperItems.map((item) => {
  Object.assign(item, {
    mCallback: () => {
      console.log(item.name);
    },
  });
  return item;
});
let { swiperOption } = toRefs(state);
</script>

<style scoped>
</style>
