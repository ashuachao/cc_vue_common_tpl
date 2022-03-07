<template>
  <div class="LangTplWrapper">
    <div
      class="langItem"
      v-for="(item, idx) in langOption.LangItems"
      :key="item.value"
    >
      <el-button
        class="btn"
        :class="item.value == langOption.active ? 'active' : ''"
        @click="toggleLang(item.value)"
        >{{ item.label }}</el-button
      >
      <span v-if="!(idx == langOption.LangItems.length - 1)">/</span>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  langOption: LayoutType.LangOptionType;
}
let { langOption } = withDefaults(defineProps<Props>(), {});
let $i18nInst = getCurrentInstance()?.appContext.config.globalProperties.$i18n;
let toggleLang = (locale: string) => {
  if ($i18nInst.locale !== locale) {
    langOption.active = locale;

    $i18nInst.locale = locale;
    localStorage.setItem("language", locale);
  }
};
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
  cursor: auto;
}
</style>
