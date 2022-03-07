<template>
  <div class="timelineTplWrapper">
    <el-timeline>
      <el-timeline-item
        v-for="item in timelineOption.timeLineItems"
        :key="item.title"
        :timestamp="item.date"
        type="success"
        placement="top"
      >
        <el-card class="timelineCard">
          <h3>{{ item.title }}</h3>
        </el-card>
      </el-timeline-item>
    </el-timeline>
  </div>
</template>

<script setup lang="ts">
interface Props {
  timelineOption: ComponentType.TimelineOptionType;
}
let { timelineOption } = withDefaults(defineProps<Props>(), {});
</script>

<style>
@keyframes pullList {
  0% {
    transform: translateY(-100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
  }
}
.timelineTplWrapper {
  width: 600px;
  background: #fff;
  border-radius: 0.04rem;
  margin-top: 0.4rem;
  text-align: left;
  animation: pullList 0.5s ease-in-out;
}
.timelineTplWrapper .el-timeline-item__timestamp {
  font-size: 0.2rem;
  font-weight: bold;
}
.timelineCard {
  color: #909399;
  font-size: 0.16rem;
  font-weight: normal;
}
</style>
