let IsDev = process.env.NODE_ENV === "development";
let CONSTANT_DEV = {};
let CONSTANT_PROD = {};
let CONSTANT_COMMON = {
    IMG_DATA_URL: "/",
    // options: en | zh | es
    LANG: "ch",
    NEED_ANIMATION: true,
    LOGO_URL:
        "http://shared.ydstatic.com/ead/dynamic/dynamic-template/image/ow_adimg1/logo.png",
    ICP: "©2019 北京网易有道计算机系统有限公司 京ICP证080268号",
};
export default Object.assign(
    CONSTANT_COMMON,
    IsDev ? CONSTANT_DEV : CONSTANT_PROD
);
