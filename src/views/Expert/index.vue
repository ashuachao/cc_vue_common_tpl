<template>
  <div class="containerWrapper">
    <Banner :bannerOption="bannerOption" />
    <div class="cardWrapper">
      <div class="optionWrapper">
        <Select :selectOption="selectOption" />
      </div>
      <div class="cardItemsWrapper">
        <Card_News_Effect
          :cardItemOption="cardItemOption"
          @loadCards="loadCardsM"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import useData from "./hooks.data";
let { cardItemOption, selectOption, bannerOption } = useData();
// add link rule
watch(
  () => selectOption.currentItem,
  (val) => {
    selectOption.currentItem = val;
    cardItemOption.currentItem = val;
  }
);
let loadCardsM = (...args: any[]) => {
  cardItemOption.loading = true;
};
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
