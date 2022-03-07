<template>
  <div
    class="cardTplWrapper"
    @click="cardItem.mCallback?.()"
    :class="cardItem.name == 'prefix' ? 'prefix' : ''"
  >
    <div class="img"><img :src="cardItem.bgImg" /></div>
    <div class="desc_wrapper">
      <div class="title">{{ cardItem.name }}</div>
      <div class="description">{{ cardItem.desc }}</div>
      <div class="date">{{ cardItem.date }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  cardItem: ComponentType.CardItemForNews;
}
let { cardItem } = withDefaults(defineProps<Props>(), {});
</script>

<style scoped>
.cardTplWrapper {
  width: 400px;
  height: 400px;
  background: #fff;
  border-radius: 4px;
  margin-bottom: 41px;
  cursor: pointer;
  box-shadow: 0 2px 30px 0 rgba(204, 230, 255, 0.36);
  /* animation: shine 0.5s linear; */
  transition: 0.2s linear all;
}
.cardTplWrapper.prefix {
  transform: scale(0);
}
.cardTplWrapper:hover {
  transform: translateY(-10px);
  -ms-transform: translateY(-10px);
  opacity: 0.8;
}
.cardTplWrapper img {
  height: 2.1rem;
  width: 100%;
}

.cardTplWrapper .desc_wrapper {
  padding: 0.2rem 0.24rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
}

.cardTplWrapper .title {
  font-size: 0.18rem;
  color: #292c33;
  line-height: 0.26rem;
}

.cardTplWrapper .description {
  margin-top: 0.16rem;
  font-size: 0.14rem;
  color: #aaadb3;
  line-height: 0.24rem;
}

.cardTplWrapper .date {
  margin-top: 0.16rem;
  font-size: 0.12rem;
  color: #bebfc1;
  line-height: 0.18rem;
}
</style>
