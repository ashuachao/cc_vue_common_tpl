/*
 * @Author: cc123456
 * @Date: 2022-02-24 00:01:41
 * @Last Modified by: cc123456
 * @Last Modified time: 2022-02-28 20:58:04
 */
// api.[ContentType].[method](option)
const enum ContentType {
    Image, //单图
    BgImage, //背景图
    List, //列表内容
}
import http from "@/helpers/utils/http";
import CONSTANT from "@/helpers/constant/constant.baseUrl";
import * as types from "tsType/type.common.td";
import routeData from "@/routers/route.setting";
import parseRouteMethod from "@/helpers/utils/parseRouteIntoData";
// 以组件最小化颗粒为维度展开、里面包含业务、公共资源，这样在每个业务块里可以包含业务资源和公共资源，尽可能做到扩展性和复用性的平衡
export default {
    getImage: (pageName: string) =>
        // http.get<types.ImageList>(`${CONSTANT.IMG_DATA_URL}/${pageName}`),
        Promise.resolve().then((): types.ImageList => {
            return {
                bannerImg: "aaa.jpg",
                bgImg: "背景大图",
                footImg: "底部图",
            };
        }),
    getBannerList: (pageName: string) =>
        // (pageName: string) => http.get<List<bannerListItem>>(`${pageName}`),
        Promise.resolve().then((): Array<types.BannerListItem> => {
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
};
