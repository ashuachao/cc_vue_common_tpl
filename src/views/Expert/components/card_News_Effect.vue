<template>
  <div class="cardItems">
    <Card_News
      v-for="item in cardItemsShow"
      :key="item.name"
      :cardItem="item"
    ></Card_News>
  </div>
  <div class="more" v-if="show_more">
    <el-button
      type="primary"
      :loading="cardItemOption.loading"
      @click="store.getMoreCards"
      >加载更多</el-button
    >
  </div>
</template>

<script setup lang="ts">
import prefixCard from "@/helpers/utils/prefixCard";
import useStore from "@/store/expert";
interface Props {
  cardItemOption: {
    cardItems: Array<ComponentType.CardItemForNews>;
    currentItem: string;
    loading: boolean;
  };
}
let { cardItemOption } = withDefaults(defineProps<Props>(), {});
let store = useStore();
let cardItemsShow = computed(() => {
  return cardItemOption.currentItem
    ? prefixCard(
        cardItemOption.cardItems.filter(
          (i) => i.date == cardItemOption.currentItem
        )
      )
    : prefixCard(cardItemOption.cardItems);
});
let show_more = computed(() => {
  return cardItemOption.cardItems.length >= 10;
});
</script>

<style scoped>
.cardItems {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
}
</style>
