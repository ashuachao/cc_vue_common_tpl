<template>
  <div class="menuTplWrapper">
    <el-menu
      :default-active="activeNav"
      class="menuItemWrapper"
      mode="horizontal"
      :router="true"
      text-color="#a9aeb8"
      active-text-color="#fc754c"
      @select="handleSelect"
    >
      <li class="logoWrapper" @click="handleSelect('index')">
        <div class="logo">
          <img :src="navOption.logo" />
        </div>
      </li>
      <template v-for="item in navOption.navItems" :key="item.label">
        <el-menu-item
          v-if="!item.children || item.children?.length == 0"
          :index="item.name"
          class="menuItem"
          >{{ item.label }}</el-menu-item
        >
        <el-sub-menu
          v-else
          :index="item.name"
          popper-class="subMenuItem"
          class="menuItem"
        >
          <template #title>{{ item.label }}</template>
          <el-menu-item
            v-for="subItem in item.children"
            :key="subItem.label"
            :index="subItem.name"
            class="menuItem"
            >{{ subItem.label }}</el-menu-item
          >
        </el-sub-menu>
      </template>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import * as types from "tsType/type.common.td";
interface Props {
  navOption: types.NavOptionType;
}
let { navOption } = withDefaults(defineProps<Props>(), {});
console.log(useRoute().name);

let activeNav = computed(() => {
  return useRoute().name;
});
let handleSelect = (index: any) => {
  console.log(index);
};
</script>

<style scoped>
@media screen and (max-width: 1280px) {
  .logoWrapper {
    margin-right: 0 !important;
  }
}
.menuTplWrapper {
  z-index: 9999;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  min-width: 1280px;
  background: #fff;
  box-shadow: 0 4px 30px 0 rgba(204, 230, 255, 0.36);
}
.logoWrapper {
  width: 1.44rem;
  height: 0.6rem;
  margin-right: 0.6rem;
  font-size: 0;
}
.logoWrapper:hover {
  cursor: pointer;
}
.logoWrapper .logo img {
  width: 100%;
  height: 100%;
}
.menuItemWrapper {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-bottom: none !important;
  background: #fff !important;
  padding: 0 0.3rem;
}
.menuItem {
  /* padding: 0 0.3rem; */
  font-weight: bold;
  background-color: #fff !important;
}
.menuItem:hover {
  color: #fc754c !important;
}
.subMenuItem .menuItem {
  font-weight: normal;
}
</style>
