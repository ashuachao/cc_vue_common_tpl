/*
 * @Author: cc123456
 * @Date: 2022-02-24 00:01:41
 * @Last Modified by: cc123456
 * @Last Modified time: 2022-02-26 14:35:53
 */
// api.[ContentType].[method](option)
const enum ContentType {
    Image, //单图
    BgImage, //背景图
    List, //列表内容
}
import http from "../utils/http";
import * as CONSTANT from "../constants/constant.baseUrl";
import * as typeOfApp from "../../../typings/type.common.td";

// 以组件最小化颗粒为维度展开、里面包含业务、公共资源，这样在每个业务块里可以包含业务资源和公共资源，尽可能做到扩展性和复用性的平衡
export default {
    getImage: (pageName: string) =>
        // http.get<typeOfApp.ImageList>(`${CONSTANT.IMG_DATA_URL}/${pageName}`),
        Promise.resolve().then((): typeOfApp.ImageList => {
            return {
                bannerImg: "aaa.jpg",
                bgImg: "背景大图",
                footImg: "底部图",
            };
        }),
    getBannerList: (pageName: string) =>
        // (pageName: string) => http.get<List<bannerListItem>>(`${pageName}`),
        Promise.resolve().then((): Array<typeOfApp.BannerListItem> => {
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
    // getCardList: (pageName: string) =>
    //     http.get<typeOfApp.BannerListItem>(`${pageName}`),
};