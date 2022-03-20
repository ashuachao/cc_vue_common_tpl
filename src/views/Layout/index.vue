<template>
  <Navbar class="navbar" :navOption="store.navOption"></Navbar>
  <LangToggle class="lang" :langOption="store.langOption" />
  <AppMain></AppMain>
  <CmsForm v-show="itemInList" :cmsFormOption="store.cmsFormOption" />
  <Foot class="foot" :footOption="store.footOption"></Foot>
</template>

<script setup lang="ts">
import useStore from "@/store/layout";
let store = useStore();
let cmsBlackList = ["CustomerService"];
let route = useRoute();
let itemInList = computed(() => {
  return !(cmsBlackList.indexOf(route.name as string) > -1);
});

console.log(route.name);
</script>

<style scoped>
.navbar {
  z-index: 100;
}
.lang {
  position: fixed;
  right: 0.4rem;
  top: 0.1rem;
  z-index: 101;
}
</style>
