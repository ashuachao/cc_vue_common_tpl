<template>
  <div class="containerWrapper">
    <Banner :bannerOption="store.bannerOption" />
    <div class="cardWrapper">
      <div class="optionWrapper">
        <Select :selectOption="store.selectOption" />
      </div>
      <div class="cardItemsWrapper">
        <Card_News_Effect :cardItemOption="store.cardItemOption" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import useData from "@/store/expert";
let store = useData();
// add link rule
watch(
  () => store.selectOption.currentItem,
  (val) => {
    store.filterCards(val);
  }
);
onMounted(() => {
  store.addCallbackToCard((item) => {
    location.href = item.link;
  });
  store.addCallbackToBanner((item) => {
    console.log(item);
  });
});
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
