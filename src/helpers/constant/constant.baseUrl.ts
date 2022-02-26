let IsDev = process.env.NODE_ENV === "development";
let CONSTANT_DEV = {};
let CONSTANT_PROD = {};
let CONSTANT_COMMON = {
    IMG_DATA_URL: "/",
    LANG: "zh",
};
export default Object.assign(
    CONSTANT_COMMON,
    IsDev ? CONSTANT_DEV : CONSTANT_PROD
);
