declare namespace LayoutType {
    interface BannerListItem {
        title: string;
        desc: string;
        image: string;
        // patch复用的key
        key: Symbol;
    }
    /**image result */
    interface ImageList {
        // 'image address',之后有同级别颗粒度的图片就加项
        bannerImg: string;
        bgImg: string;
        footImg: string;
    }
    /**List result */
    interface List<T> {
        res: Array<T>;
        len: number;
    }
    // navbar types
    interface NavOptionType {
        navItems: Array<NavbarItem>;
        type?: string;
        logo?: string;
    }
    interface NavbarItem {
        name: string;
        label: string;
        children: Array<NavbarItem>;
    }
    // foot types
    interface FootOptionType {
        icp: string;
        footItems: Array<FootItem>;
    }
    interface FootItem {
        name: string;
        link: string;
    }
    // lang
    interface LangItem {
        value: string;
        label: string;
    }
    interface LangOptionType {
        LangItems: Array<LangItem>;
        active: string;
    }
}
