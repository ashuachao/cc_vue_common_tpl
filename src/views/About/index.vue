
<template>
  <div class="wrapper">
    <Timeline :timeline-option="store.timelineOption" />
  </div>
</template>

<script setup lang="ts">
import useData from "@/store/about";
let store = useData();
</script>

<style scoped>
.wrapper {
  display: flex;
  justify-content: center;
}
</style>
