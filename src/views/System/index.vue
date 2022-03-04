<template>
  <div class="containerWrapper">
    <Banner :banner-option="bannerOption" />
  </div>
</template>

<script setup lang="ts">
import useData from "./hooks.data";
let { bannerOption } = useData();
</script>

<style scoped>
.containerWrapper {
}
.cardWrapper {
  width: 100%;
  margin-top: 0.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.optionWrapper {
  width: 1280px;
  display: flex;
  justify-content: flex-start;
  padding: 0.2rem 0;
}
.cardItemsWrapper {
  width: 1280px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
