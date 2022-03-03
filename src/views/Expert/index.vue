<template>
  <div class="containerWrapper">
    <Swiper :swiperOption="swiperOption" />
    <div class="cardWrapper">
      <div class="optionWrapper">
        <Select :selectOption="selectOption" />
      </div>
      <div class="cardItems">
        <Card_News
          v-for="item in caseItemsShow"
          :key="item.name"
          :cardItem="item"
        ></Card_News>
      </div>
    </div>
    <div>i am expert</div>
  </div>
</template>

<script setup lang="ts">
import prefixCard from "@/helpers/utils/prefixCard";
import useData from "./hooks.data";
let { swiperOption, caseOption, selectOption } = useData();
watch(
  () => selectOption.currentItem,
  (val) => {
    selectOption.currentItem = val;
  }
);
let caseItemsShow = computed(() => {
  return selectOption.currentItem
    ? prefixCard(
        caseOption.caseItems.filter((i) => i.date == selectOption.currentItem)
      )
    : prefixCard(caseOption.caseItems);
});
nextTick(() => {
  caseOption.caseItems = [
    {
      name: "1",
      desc: "白鲸出海在 2018 全球流量大会前夕采访了网易有道运营总监冯庆强，了解网易有道在海外市场的思考和布局。",
      link: "https://oimageb2.ydstatic.com/image?id=3397853057329434227&product=xue",
      bgImg:
        "https://oimageb2.ydstatic.com/image?id=3397853057329434227&product=xue",
      date: "20220301",
    },
    {
      name: "2",
      desc: "白鲸出海在 2018 全球流量大会前夕采访了网易有道运营总监冯庆强，了解网易有道在海外市场的思考和布局。",
      link: "https://oimageb2.ydstatic.com/image?id=3397853057329434227&product=xue",
      bgImg:
        "https://oimageb2.ydstatic.com/image?id=3397853057329434227&product=xue",
      date: "20220302",
    },
    {
      name: "3",
      desc: "白鲸出海在 2018 全球流量大会前夕采访了网易有道运营总监冯庆强，了解网易有道在海外市场的思考和布局。",
      link: "https://oimageb2.ydstatic.com/image?id=3397853057329434227&product=xue",
      bgImg:
        "https://oimageb2.ydstatic.com/image?id=3397853057329434227&product=xue",
      date: "20220302",
    },
    {
      name: "4",
      desc: "白鲸出海在 2018 全球流量大会前夕采访了网易有道运营总监冯庆强，了解网易有道在海外市场的思考和布局。",
      link: "https://oimageb2.ydstatic.com/image?id=3397853057329434227&product=xue",
      bgImg:
        "https://oimageb2.ydstatic.com/image?id=3397853057329434227&product=xue",
      date: "20220301",
    },
    {
      name: "5",
      desc: "白鲸出海在 2018 全球流量大会前夕采访了网易有道运营总监冯庆强，了解网易有道在海外市场的思考和布局。",
      link: "https://oimageb2.ydstatic.com/image?id=3397853057329434227&product=xue",
      bgImg:
        "https://oimageb2.ydstatic.com/image?id=3397853057329434227&product=xue",
      date: "20220301",
    },
  ].map((item) => {
    Object.assign(item, {
      mCallback: () => {
        location.href = item.link;
      },
    });
    return item;
  });
});
// hooks, add callback of method
swiperOption.swiperItems = swiperOption.swiperItems.map((item) => {
  Object.assign(item, {
    mCallback: () => {
      console.log(item.name);
    },
  });
  return item;
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
.cardItems {
  width: 1280px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>
