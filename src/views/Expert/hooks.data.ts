import { link } from "fs";
export default () => {
    let swiperOption: ComponentType.swiperOptionType = reactive({
        swiperItems: [
            {
                link: "https://shared.ydstatic.com/ead/dynamic/dynamic-template/image/ow_adimg1/news_banner.png",
                name: "swiper1",
                subName: "sub_swiper1",
                method: "参与一",
            },
            {
                link: "https://shared.ydstatic.com/ead/dynamic/dynamic-template/image/ow_adimg1/news_banner.png",
                name: "swiper2",
                subName: "sub_swiper1",
                method: "参与二",
            },
            {
                link: "https://shared.ydstatic.com/ead/dynamic/dynamic-template/image/ow_adimg1/news_banner.png",
                name: "swiper3",
                subName: "sub_swiper1",
                method: "参与三",
            },
        ],
    });
    let caseOption = reactive({
        caseItems: [] as Array<ComponentType.CardItemForNews>,
    });
    let selectOption: ComponentType.SelectOptionType = reactive({
        currentItem: "",
        selectItems: [
            {
                value: "",
                label: "全部",
            },
            {
                value: "20220301",
                label: "Option1",
            },
            {
                value: "20220302",
                label: "Option2",
            },
            {
                value: "Option3",
                label: "Option3",
            },
            {
                value: "Option4",
                label: "Option4",
            },
            {
                value: "Option5",
                label: "Option5",
            },
        ] as Array<ComponentType.SelectItem>,
    });
    return {
        swiperOption,
        caseOption,
        selectOption,
    };
};
