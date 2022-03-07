/*
 * @Author: cc123456
 * @Date: 2022-02-24 00:01:41
 * @Last Modified by: cc123456
 * @Last Modified time: 2022-03-07 17:32:55
 */
import http from "@/helpers/utils/http";
import CONSTANT from "@/helpers/constant/constant.baseUrl";
import routeData from "@/routers/route.setting";
import parseRouteMethod from "@/helpers/utils/parseRouteIntoData";
// 以组件最小化颗粒为维度展开、里面包含业务、公共资源，这样在每个业务块里可以包含业务资源和公共资源，尽可能做到扩展性和复用性的平衡
export default {
    getImage: (pageName: string) =>
        // http.get<types.ImageList>(`${CONSTANT.IMG_DATA_URL}/${pageName}`),
        Promise.resolve().then((): LayoutType.ImageList => {
            return {
                bannerImg: "aaa.jpg",
                bgImg: "背景大图",
                footImg: "底部图",
            };
        }),
    getBannerList: (pageName: string) =>
        // (pageName: string) => http.get<List<bannerListItem>>(`${pageName}`),
        Promise.resolve().then((): Array<LayoutType.BannerListItem> => {
            return [
                {
                    title: "title.jpg",
                    desc: "这是banner1",
                    image: "image.jpg",
                    key: Symbol(),
                },
                {
                    title: "title.jpg",
                    desc: "这是banner1",
                    image: "image.jpg",
                    key: Symbol(),
                },
            ];
        }),
    getNewsList: () => {
        return [
            {
                name: "1",
                desc: "白鲸出海在 2018 全球流量大会前夕采访了网易有道运营总监冯庆强，了解网易有道在海外市场的思考和布局。",
                link: "https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7a2540946efd4e7bbc134da9a5b15fc9~tplv-k3u1fbpfcp-watermark.awebp",
                bgImg: "https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7a2540946efd4e7bbc134da9a5b15fc9~tplv-k3u1fbpfcp-watermark.awebp",
                date: "20220301",
            },
            {
                name: "2",
                desc: "白鲸出海在 2018 全球流量大会前夕采访了网易有道运营总监冯庆强，了解网易有道在海外市场的思考和布局。",
                link: "https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7a2540946efd4e7bbc134da9a5b15fc9~tplv-k3u1fbpfcp-watermark.awebp",
                bgImg: "https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7a2540946efd4e7bbc134da9a5b15fc9~tplv-k3u1fbpfcp-watermark.awebp",
                date: "20220302",
            },
            {
                name: "3",
                desc: "白鲸出海在 2018 全球流量大会前夕采访了网易有道运营总监冯庆强，了解网易有道在海外市场的思考和布局。",
                link: "https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7a2540946efd4e7bbc134da9a5b15fc9~tplv-k3u1fbpfcp-watermark.awebp",
                bgImg: "https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7a2540946efd4e7bbc134da9a5b15fc9~tplv-k3u1fbpfcp-watermark.awebp",
                date: "20220302",
            },
            {
                name: "4",
                desc: "白鲸出海在 2018 全球流量大会前夕采访了网易有道运营总监冯庆强，了解网易有道在海外市场的思考和布局。",
                link: "https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7a2540946efd4e7bbc134da9a5b15fc9~tplv-k3u1fbpfcp-watermark.awebp",
                bgImg: "https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7a2540946efd4e7bbc134da9a5b15fc9~tplv-k3u1fbpfcp-watermark.awebp",
                date: "20220301",
            },
            {
                name: "5",
                desc: "白鲸出海在 2018 全球流量大会前夕采访了网易有道运营总监冯庆强，了解网易有道在海外市场的思考和布局。",
                link: "https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7a2540946efd4e7bbc134da9a5b15fc9~tplv-k3u1fbpfcp-watermark.awebp",
                bgImg: "https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7a2540946efd4e7bbc134da9a5b15fc9~tplv-k3u1fbpfcp-watermark.awebp",
                date: "20220301",
            },
        ];
    },
};
