<template>
  <router-view v-slot="{ Component }">
    <transition v-if="CONSTANT.NEED_ANIMATION" name="shine">
      <keep-alive
        ><component :is="Component" :key="key"></component>
      </keep-alive>
    </transition>
    <keep-alive v-else
      ><component :is="Component" :key="key"></component
    ></keep-alive>
  </router-view>
</template>

<script setup>
let route = useRoute();
import CONSTANT from "@/helpers/constant/constant.baseUrl";
const key = computed(() => {
  return route.path;
});
console.log(111);
</script>

<style>
</style>
