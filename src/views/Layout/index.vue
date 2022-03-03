<template>
  <Navbar class="navbar" :navOption="navOption"></Navbar>
  <AppMain></AppMain>
  <Foot class="foot" :footOption="footOption"></Foot>
  <!-- <Introduce class="intro"></Introduce> -->
</template>

<script setup lang="ts">
import parseRouteIntoData from "@/helpers/utils/parseRouteIntoData";
import routeSetting from "@/routers/route.setting";
import constant from "@/helpers/constant/constant.baseUrl";
import useI18n from "@/helpers/hooks/useI18n";
const { generateTitle } = useI18n();
let state = reactive({
  navOption: {} as LayoutType.NavOptionType,
  footOption: {} as LayoutType.FootOptionType,
});

//defined the navoption
state.navOption.logo = constant.LOGO_URL;
state.navOption.navItems = parseRouteIntoData(
  routeSetting,
  (item: LayoutType.NavbarItem) => {
    item.label = generateTitle(`navbar.${item.name}`);
  }
).filter((i) => i.name == "Layout")?.[0].children;
// defined the foot option
state.footOption.icp = constant.ICP;
state.footOption.footItems = [
  { name: "网易有道", link: "www.baidu.com" },
  { name: "网易游戏", link: "www.baidu.com" },
  { name: "网易在线", link: "www.baidu.com" },
];
let { navOption, footOption } = toRefs(state);
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
