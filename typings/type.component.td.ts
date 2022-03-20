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
        date?: string;
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
    // banner
    interface BannerOptionType {
        bgImg: string;
        title: string;
        subTitle?: string;
        method?: string;
        mCallback?: () => void;
    }
    // timeline
    interface TimelineItem {
        date: string;
        title: string;
        sub_title?: string;
        svgIcon?: string;
    }
    interface TimelineOptionType {
        timeLineItems: Array<TimelineItem>;
    }
    // form
    // cmsform
    interface CmsFormOptionType {
        formItems: Array<FormItem>;
        tel: string;
        mail: string;
    }
    interface FormItem {
        placeholder: string;
        name: string;
        rules?: Array<any>;
    }
    // barrage
    interface BarrageItem {
        value: string;
        color: string;
        speedLevel: number;
        size: string;
        delay: number;
        createAt: string;
        id?: string;
    }
    interface BarrageOption {
        barrageItems: Array<BarrageItem>;
        length: number;
    }
    // emotion
    interface EmotionOption {
        type: string;
    }
    // svg
    interface SvgOption {
        svgName: string;
        color?: string;
    }
}
