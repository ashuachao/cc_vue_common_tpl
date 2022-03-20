let getLength = (str = ""): number => {
    return str
        .replace(/[\u0000-\u007f]/g, "a")
        .replace(/[\u0080-\u07ff]/g, "aa")
        .replace(/[\u0800-\uffff]/g, "aaa").length;
};
// test
// console.log(getStrByte('123456多少字节?？❓'))
export default length;
