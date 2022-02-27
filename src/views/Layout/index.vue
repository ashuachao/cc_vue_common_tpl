<template>
  <Navbar class="navbar"></Navbar>
  <AppMain></AppMain>
  <Foot class="foot"></Foot>
  <Introduce class="intro"></Introduce>
</template>

<script setup>
import Introduce from "./components/Introduce/Introduce.vue";
</script>

<style scoped>
.intro {
  position: absolute;
  width: 2rem;
  height: 2rem;
  background: red;
  right: 0;
  bottom: 0;
}
</style>
