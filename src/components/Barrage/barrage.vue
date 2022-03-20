<template>
  <div class="barrageTplWrapper" ref="wrapper">
    <!-- <div
      class="barrageItemsTrack"
      v-for="(track, i) in barrageTrackItems"
      :key="i"
      :ref="(el) => (tracks[i] = el)"
    >
      <BarrageItem v-for="item in track" :key="item.value" :itemOption="item" />
    </div> -->
    <div class="emotionItemWrapper">
      <EmotionItem :emoOption="emoOption" />
    </div>
    <div class="sendWrapper">
      <div class="iconItem">
        <SvgIcon
          svgName="emotion"
          color="#567"
          @click="changeOptions(1)"
        ></SvgIcon>
      </div>
      <div class="iconItem">
        <SvgIcon
          svgName="write"
          color="#567"
          @click="changeOptions(0)"
        ></SvgIcon>
      </div>
      <div class="inputText" :class="OptionArr[0] ? 'active' : ''">
        <el-input
          v-model="barrageVal"
          placeholder="Please input what you want to say"
        />
        <el-button type="primary" @click="sendBarrage">发送弹幕</el-button>
      </div>
      <div class="inputText" :class="OptionArr[1] ? 'emoActive' : ''">
        <div class="iconItem" @click="sendEmotion">
          <SvgIcon svgName="emotion" color="#567"></SvgIcon>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import Barrage from "./barrage";
import useOptions from "@/helpers/hooks/useOptions";
// let BarrageInstance = new Barrage({ length: 3 });
let barrageVal = ref("");
let { OptionArr, changeOptions } = useOptions(3);
// 0:text,1:emotion
changeOptions(0);
// let barrageTrackItems = reactive(BarrageInstance.getRouteAmount());
let emoOption = reactive({
  type: "test",
});
let sendEmotion = () => {
  emoOption.type = "write";
};
let tracks = reactive<any>([]);
let wrapper = ref<HTMLElement | null>(null);
let sendBarrage = () => {
  // barrageTrackItems[0].push({
  //   value: barrageVal.value,
  //   color: "#fff",
  //   speedLevel: 1,
  //   size: "normal",
  //   createAt: new Date().toLocaleString(),
  //   delay: 2,
  // });
};
onMounted(() => {
  let parentWidth = `${wrapper.value?.getBoundingClientRect().width}`;
  localStorage.getItem("parentWidth")
    ? ""
    : localStorage.setItem("parentWidth", parentWidth);
});
</script>
<style scope>
.barrageTplWrapper {
  margin: auto;
  margin-top: 0.5rem;
  width: 80%;
  height: 600px;
  position: relative;
  background: #000;
  box-shadow: 0 0.02rem 0.3rem 0 rgba(0, 0, 0, 0.36);
  border-radius: 12px;
  overflow: hidden;
}
.sendWrapper {
  bottom: 0;
  width: 100%;
  margin: auto;
  left: 50%;
  transform: translateX(-50%);
  position: absolute;
  display: flex;
  align-items: center;
  overflow: hidden;
  background: #fc754b;
}
.iconItem {
  width: 0.3rem;
  height: 0.3rem;
  padding: 0.05rem;
  margin-left: 0.1rem;
  box-shadow: 0 0.02rem 0.3rem 0 rgba(204, 230, 255, 0.36);
  border-radius: 50%;
  cursor: pointer;
}
.inputText {
  position: absolute;
  left: 1.2rem;
  width: 80%;
  height: 100%;
  transform-origin: center center;
  transform: translateY(-120%);
  display: flex;
  align-items: center;
  transition: 0.5s ease-in-out;
}
.inputText.active {
  transform: translateY(0);
}
.inputText.emoActive {
  transform: scaleX(1);
  background: #fff;
  justify-content: flex-start;
}
.barrageItemsTrack {
  height: 0.5rem;
  display: flex;
  align-items: center;
  position: relative;
}
.emotionItemWrapper {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate3d(-50%, -50%, 0);
}
</style>
