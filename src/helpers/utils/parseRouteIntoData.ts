import * as types from "tsType/type.common.td";
import { RouteRecordRaw } from "vue-router";

/*
 *
 * @param routeArr
 * @param fn
 * @returns [{name:[name], label:[label], children}]
 */
let parseRouteIntoData = (
    routeArr: Array<RouteRecordRaw>,
    fn: (i: types.NavbarItem) => void
): Array<types.NavbarItem> => {
    let result = [] as Array<types.NavbarItem>;
    if (routeArr.length == 0) return result;
    for (let i = 0; i < routeArr.length; i++) {
        let navObj = {
            name: String(routeArr[i]?.name),
        } as types.NavbarItem;
        fn(navObj);
        if (routeArr[i].children?.length) {
            navObj.children = parseRouteIntoData(
                routeArr[i].children as Array<RouteRecordRaw>,
                fn
            );
        } else {
            navObj.children = [];
        }
        result.push(navObj);
    }
    return result;
};

export default parseRouteIntoData;
