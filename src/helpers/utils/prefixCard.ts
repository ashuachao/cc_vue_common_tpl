export default (arr: Array<ComponentType.CardCommon>, fixLen = 3) => {
    let len = arr.length;
    let rest = len % fixLen;
    if (len == 0 || rest == 0) return arr;
    return arr.concat(
        Array.from({ length: fixLen - rest }, () => {
            return { name: "prefix" } as ComponentType.CardCommon;
        })
    );
};
