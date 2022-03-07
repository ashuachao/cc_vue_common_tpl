export default () => {
    let timelineOption: ComponentType.TimelineOptionType = {
        timeLineItems: [
            {
                title: "我要专家在北京成立，并与国内各大券商建立合作关系",
                date: "2014年",
            },
            {
                title: "进行了服务转型：从卖方转为买方。并与多家知名公募基金建立合作关系",
                date: "2015年",
            },
            {
                title: "引用大数据技术扩建专家库，并与多家私募基金建立合作关系",
                date: "2016年-2017年",
            },
            {
                title: "客户类型拓宽到全行业",
                date: "2018年",
            },
            {
                title: "全行业客户发展初具规模，增加线上专家业务",
                date: "2019年",
            },
        ],
    };
    const useStore = defineStore("aboutStore", {
        state: () => {
            return { timelineOption };
        },
        actions: {
            toggleLocale(locale: string): void {},
        },
    });
    return useStore();
};
