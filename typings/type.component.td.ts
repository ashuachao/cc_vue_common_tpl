declare namespace ComponentType {
    // swiper
    interface swiperOptionType {
        swiperItems: Array<SwiperItem>;
        virtual?: boolean;
    }
    interface SwiperItem {
        link: string;
        name: string;
        subName?: string;
        method?: string;
        mCallback?: () => void;
    }
    // card
    interface CardCommon {
        link: string;
        bgImg: string;
        name: string;
        desc: string;
    }
    interface CardItemForNews extends CardCommon {
        date: string;
        method?: string;
        mCallback?: () => void;
    }
    interface CardItemForCustom extends CardCommon {
        tags?: Array<{ num: string; tag: string }>;
        method?: string;
        mCallback?: () => void;
    }
    // select
    interface SelectOptionType {
        selectItems: Array<SelectItem>;
        placeHolder?: string;
        currentItem: string;
    }
    interface SelectItem {
        value: string;
        label: string;
    }
}
