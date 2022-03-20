export default class Barrage {
    barrageList: any[];
    cacheBarList: any[];
    routeAmount: any[];
    draw: boolean;
    routesDom: HTMLElement[] | undefined;
    wrapperDom: any;
    constructor(options: any) {
        let { length } = options;
        this.barrageList = [];
        this.cacheBarList = [];
        this.routeAmount = [];
        this.draw = false;
        this.initTop(length);
    }
    getRouteAmount() {
        let barrageTrackItems: Array<Array<ComponentType.BarrageItem>> =
            reactive([
                [
                    {
                        value: "弹幕1",
                        color: "#fff",
                        speedLevel: 1,
                        size: "normal",
                        createAt: new Date().toLocaleString(),
                        delay: 1,
                        id: "s1",
                    },
                    {
                        value: "弹幕2",
                        color: "#fff",
                        speedLevel: 1,
                        size: "normal",
                        createAt: new Date().toLocaleString(),
                        delay: 2,
                        id: "s2",
                    },
                ],
                [
                    {
                        value: "弹幕3",
                        color: "#fff",
                        speedLevel: 1,
                        size: "normal",
                        createAt: new Date().toLocaleString(),
                        delay: 1,
                        id: "s3",
                    },
                    {
                        value: "弹幕4",
                        color: "#fff",
                        speedLevel: 1,
                        size: "normal",
                        createAt: new Date().toLocaleString(),
                        delay: 2,
                        id: "s4",
                    },
                    {
                        value: "弹幕8",
                        color: "#fff",
                        speedLevel: 1,
                        size: "normal",
                        createAt: new Date().toLocaleString(),
                        delay: 3,
                        id: "s5",
                    },
                ],
                [
                    {
                        value: "弹幕5",
                        color: "#fff",
                        speedLevel: 1,
                        size: "normal",
                        createAt: new Date().toLocaleString(),
                        delay: 1,
                        id: "s6",
                    },
                    {
                        value: "弹幕6",
                        color: "#fff",
                        speedLevel: 1,
                        size: "normal",
                        createAt: new Date().toLocaleString(),
                        delay: 2,
                        id: "s7",
                    },
                ],
            ]);
        return barrageTrackItems;
    }
    initTop(len: number) {
        const maxRouteLen = len;
        this.routeAmount = Array.from({ length: len });
        return this.routeAmount;
    }
    addText(arr: Array<any>) {
        if (this.draw) {
            if (this.routeAmount.length != 0) {
                let barrageList = this.cacheBarList.splice(
                    0,
                    this.routeAmount.length
                );
                for (const val of barrageList) {
                    this.barrageList.push(this.initTest(val));
                }
            }
            this.cacheBarList.push(...arr);
        } else {
            this.cacheBarList.push(...arr);
            this.draw = true;
            this.runBarrage();
        }
    }
    initTest(item: any) {
        let barDiv = document.createElement("div");
        barDiv.className = "barrageItem";
        barDiv.innerHTML = item.value;
        this.routesDom?.[0].appendChild(barDiv);
        let left = getComputedStyle(this.wrapperDom, null).width;
        let width = getComputedStyle(barDiv, null).width;
        let barrageItem = {
            value: item.value,
            color: item.color,
            left,
            top: this.routeAmount.splice(0, 1)[0],
            speed: item.speedLevel,
            // width: Math.ceil(parseInt(width)),
            occupation: true,
        };
        console.log(width);

        return barrageItem;
    }
    runBarrage() {
        this.cacheBarList.splice(0, this.routeAmount.length).forEach((item) => {
            this.barrageList.push(this.initTest(item));
        });
        this.drawBarrage();
    }
    drawBarrage() {}
}
