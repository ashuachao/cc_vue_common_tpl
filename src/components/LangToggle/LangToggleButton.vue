<template>
  <div class="LangTplWrapper">
    <div
      class="langItem"
      v-for="(item, idx) in langButtonOption.LangItems"
      :key="item.name"
    >
      <el-button class="btn" :class="item.active ? 'active' : ''">{{
        item.name
      }}</el-button>
      <span v-if="!(idx == langButtonOption.LangItems.length - 1)">/</span>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  langButtonOption: ComponentType.LangButtonOptionType;
}
let { langButtonOption } = withDefaults(defineProps<Props>(), {});
</script>

<style scoped>
.LangTplWrapper {
  display: flex;
  font-size: 0.2rem;
}
.langItem span {
  margin: 0 0.1rem;
}
.langItem .btn {
  color: #000;
}
.langItem .btn.active {
  background: #fc754b;
  border-color: #fc754b;
  color: #eee;
  font-weight: bold;
}
</style>
