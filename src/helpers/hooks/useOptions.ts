function useOptions(len: number) {
    let OptionArr: Array<number> = reactive([]);
    let OptionCopy: Array<number> = [];
    for (let i = 0; i < len; i++) {
        // 1:1,2:2,3:4
        OptionArr[i] = 1 << i;
        OptionCopy[i] = 1 << i;
    }
    let changeOptions = (inx: number) => {
        let flag = 1 << inx;
        for (let i = 0; i < OptionCopy.length; i++) {
            OptionArr[i] = flag & OptionCopy[i];
        }
    };
    return { OptionArr, changeOptions };
}
export default useOptions;
