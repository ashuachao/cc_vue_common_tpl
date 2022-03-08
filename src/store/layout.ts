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
    // define the form option
    let cmsFormOption = {
        formItems: [
            {
                placeholder: "姓名（必填）",
                name: "name",
                rules: [
                    { required: true, message: "请输入姓名", trigger: "blur" },
                ],
            },
            {
                placeholder: "手机（必填）",
                name: "tel",
                rules: [
                    {
                        validator: (
                            rule: any,
                            value: string,
                            callback: any
                        ) => {
                            if (value === "") {
                                callback(new Error("请输入手机号码"));
                            } else if (!/^1[34578]\d{9}$/.test(value)) {
                                callback(new Error("请输入正确的手机号码"));
                            } else {
                                callback();
                            }
                        },
                        trigger: "blur",
                    },
                ],
            },
            {
                placeholder: "邮箱",
                name: "mail",
            },
            {
                placeholder: "推广网站/App名称",
                name: "refer",
            },
        ],
        tel: "400-6789-163",
        mail: "service@corp.youdao.com",
    };
    // defineStore
    const useStore = defineStore("layoutStore", {
        state: () => {
            return {
                navOption,
                footOption,
                langOption,
                cmsFormOption,
            };
        },
        actions: {
            toggleLocale(locale: string): void {},
            submitForm(formItems: Array<ComponentType.FormItem>) {
                console.log(formItems);
            },
        },
    });
    return useStore();
};
