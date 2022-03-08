export default (formItems: Array<ComponentType.FormItem>) => {
    let resultRule = {} as any;
    let resultRef = {} as any;
    for (let i of formItems) {
        let oriR = resultRule[i.name];
        if (oriR?.length) {
            resultRule[i.name] = (oriR as Array<any>).concat(i.rules);
        } else {
            resultRule[i.name] = i.rules || [];
        }
        resultRef[i.name] = "";
    }
    return { resultRule, resultRef };
};
