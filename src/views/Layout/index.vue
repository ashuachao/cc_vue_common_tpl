<template>
  <Navbar class="navbar" :navOption="store.navOption"></Navbar>
  <LangToggle class="lang" :langOption="store.langOption" />
  <AppMain></AppMain>
  <Foot class="foot" :footOption="store.footOption"></Foot>
</template>

<script setup lang="ts">
import useStore from "@/store/layout";
let store = useStore();
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
