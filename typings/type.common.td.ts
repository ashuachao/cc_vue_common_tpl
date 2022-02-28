export interface BannerListItem {
    title: string;
    desc: string;
    image: string;
    // patch复用的key
    key: Symbol;
}
/**image result */
export interface ImageList {
    // 'image address',之后有同级别颗粒度的图片就加项
    bannerImg: string;
    bgImg: string;
    footImg: string;
}
/**List result */
export interface List<T> {
    res: Array<T>;
    len: number;
}
// navbar types
export interface NavOptionType {
    navItems: Array<NavbarItem>;
    type?: string;
    logo?: string;
}
export interface NavbarItem {
    name: string;
    label: string;
    children: Array<NavbarItem>;
}
