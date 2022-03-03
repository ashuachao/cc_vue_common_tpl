<template>
  <div class="optionTplWrapper">
    <el-select
      v-model="selectOption.currentItem"
      :placeholder="selectOption?.placeHolder ?? 'select'"
      size="large"
    >
      <el-option
        v-for="item in selectOption?.selectItems"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      >
      </el-option>
    </el-select>
  </div>
</template>

<script setup lang="ts">
interface Props {
  selectOption: ComponentType.SelectOptionType;
}
let { selectOption } = withDefaults(defineProps<Props>(), {});
</script>

<style scoped>
</style>
