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
    // defineStore
    const useStore = defineStore("homeStore", {
        state: () => {
            return {
                swiperOption,
            };
        },
        actions: {},
    });
    return useStore();
};
