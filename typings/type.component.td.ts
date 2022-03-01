export interface swiperOptionType {
    swiperItems: Array<SwiperItem>;
    virtual?: boolean;
}
export interface SwiperItem {
    link: string;
    name: string;
    subName?: string;
    method?: string;
    mCallback: () => void;
}
