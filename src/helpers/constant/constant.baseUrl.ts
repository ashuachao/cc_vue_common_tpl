let IsDev = process.env.NODE_ENV === "development";
let CONSTANT_DEV = {};
let CONSTANT_PROD = {};
let CONSTANT_COMMON = {
    IMG_DATA_URL: "/",
    LANG: "zh",
    NEED_ANIMATION: false,
    LOGO_URL:
        "http://shared.ydstatic.com/ead/dynamic/dynamic-template/image/ow_adimg1/logo.png",
};
export default Object.assign(
    CONSTANT_COMMON,
    IsDev ? CONSTANT_DEV : CONSTANT_PROD
);
