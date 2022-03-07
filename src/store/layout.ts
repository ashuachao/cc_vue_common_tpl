import api from "@/helpers/api";
import parseRouteIntoData from "@/helpers/utils/parseRouteIntoData";
import constant from "@/helpers/constant/constant.baseUrl";
import routeSetting from "@/routers/route.setting";
// 定义store, myFirstStore是store的名称，该名称必须唯一，不可重复
// export
export default () => {
    let $i18nInst =
        getCurrentInstance()?.appContext.config.globalProperties.$i18n;
    let navOption: LayoutType.NavOptionType = reactive({ navItems: [] });
    //defined the nav option
    navOption.logo = constant.LOGO_URL;
    navOption.navItems = parseRouteIntoData(
        routeSetting,
        (item: LayoutType.NavbarItem) => {
            item.label = item.name;
        }
    ).filter((i) => i.name == "Layout")?.[0].children;
    // defined the foot option
    let footOption: LayoutType.FootOptionType = reactive({
        icp: constant.ICP,
        footItems: [
            { name: "网易有道", link: "www.baidu.com" },
            { name: "网易游戏", link: "www.baidu.com" },
            { name: "网易在线", link: "www.baidu.com" },
        ],
    });
    // define the lang btn option
    let lang = localStorage.getItem("language") || constant.LANG;
    let langOption: LayoutType.LangOptionType = reactive({
        active: lang,
        LangItems: [
            { value: "zh", label: "中文" },
            { value: "en", label: "English" },
        ],
    });
    // defineStore
    const useStore = defineStore("layoutStore", {
        state: () => {
            return {
                navOption,
                footOption,
                langOption,
            };
        },
        actions: {
            toggleLocale(locale: string): void {},
        },
    });
    return useStore();
};
