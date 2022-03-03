<template>
  <div class="FootTplWrapper">
    <div class="FootList">
      <div class="FootListItem">
        <div
          class="Item"
          v-for="(item, idx) in footOption.footItems"
          :key="item.name"
        >
          <a :href="item.link">{{ item.name }}</a
          >{{ idx == footOption.footItems.length - 1 ? "" : "/" }}
        </div>
      </div>
      <div class="FootListItem">
        {{ footOption.icp }}
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  footOption: LayoutType.FootOptionType;
}
let { footOption } = withDefaults(defineProps<Props>(), {});
</script>

<style scoped>
.FootTplWrapper {
  margin: 0.2rem 0;
  width: 100%;
  display: flex;
  justify-content: center;
}
.FootList {
  width: 1280px;
  display: flex;
  flex-direction: column;
}
.FootListItem {
  font-family: PingFangSC-Regular;
  font-size: 0.14rem;
  line-height: 0.14rem;
  margin-top: 0.1rem;
  color: #c0c6d1;
  display: flex;
  justify-content: center;
}

a {
  text-decoration: dotted;
  color: #c0c6d1;
}
a:hover {
  text-decoration: underline;
}
</style>
