import api from "@/helpers/api";
interface cardItemsType {
    loading: boolean;
    currentItem: string;
    cardItems: Array<ComponentType.CardItemForNews>;
}
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
    let cardItemOption: cardItemsType = reactive({
        loading: false,
        currentItem: "",
        cardItems: api.getNewsList(),
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
    let bannerOption: ComponentType.BannerOptionType = {
        bgImg: "https://shared.ydstatic.com/ead/dynamic/dynamic-template/image/ow_adimg1/news_banner.png",
        title: "swiper1",
        subTitle: "sub_swiper1",
        method: "参与一",
    };
    // defineStore
    const useStore = defineStore("expertStore", {
        state: () => {
            return {
                cardItemOption,
                selectOption,
                bannerOption,
            };
        },
        actions: {
            filterCards(val: string) {
                this.cardItemOption.currentItem = val;
            },
            getMoreCards() {
                this.cardItemOption.loading = true;
            },
            addCallbackToCard(fn: (val: any) => void) {
                let that = this;
                this.cardItemOption.cardItems =
                    this.cardItemOption.cardItems.map((item) => {
                        Object.assign(item, {
                            mCallback: fn.bind(that, item),
                        });
                        return item;
                    });
            },
            addCallbackToBanner(fn: (val: any) => void) {
                let that = this;
                this.bannerOption = Object.assign(this.bannerOption, {
                    mCallback: fn.bind(that, that.bannerOption),
                });
            },
        },
    });
    return useStore();
};
