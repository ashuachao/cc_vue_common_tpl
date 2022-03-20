let initBarrageStyle = (width: number): void => {};
const defaultOpt = {
    trackLen: 3,
    duration: 5,
};
const setting = {
    WrapperClsName: "barrageTplWrapper",
};
class BarrageJS {
    options: any;
    ele: HTMLElement;
    eleW: number = 0; //存储包裹框的宽度
    trackLen: any; //轨道宽度，根据这个生成列表
    tracksArr: any[] = []; //轨道列表
    barrageArr: any[] = []; //轨道对应的弹幕列表
    itemTempDom: HTMLElement | undefined;
    barrageInfo: any = {};
    elePos: DOMRect | undefined;
    cacheQueues: any[] = [];
    constructor(ele: HTMLElement, opts = {}) {
        this.options = Object.assign(defaultOpt, opts);
        this.trackLen = this.options.trackLen;
        this.ele = ele;
        this.initOpt(ele);
    }
    /**
     * 初始化一些页面固定数据，减少重复操作dom
     * @param ele
     */
    initOpt(ele: HTMLElement) {
        this.elePos = ele.getBoundingClientRect();
        this.eleW = this.elePos.width;
        this.tracksArr = new Array(this.trackLen).fill("free");
        this.barrageArr = new Array(this.trackLen).fill([]);
        this.cacheQueues = new Array();
        this.ele.classList.add(setting.WrapperClsName);
        this.initWrapperStyle(this.eleW);
        this.itemTempDom = this.initItemTempDom();
        this.ele.appendChild(this.itemTempDom);
    }
    /**
     * 动态生成barrage style+keyframe
     * @param width
     */
    initWrapperStyle(width: number) {
        let style = document.createElement("style");
        let barrageItemStyleStr = `
            .barrageItemWrapper {
                position: absolute;
                left: 0;
                font-size: 0.2rem;
                margin-right: 0.2rem;
                will-change: transform;
                visibility: hidden;
                animation-name: barrageRun;
                animation-timing-function: linear;
            }
            .barrageItemWrapperTemp{
                position absolute;
                right:-999;
            }
        `;
        let keyframeStr = `@keyframes barrageRun {
            from {
                visibility: visible;
              transform: translate3d(${width}px, 0, 0);
            }
            to {
                visibility: visible;
              transform: translate3d(-100%, 0, 0);
            }
          }`;
        style.innerHTML = barrageItemStyleStr + keyframeStr;
        document.head.appendChild(style);
    }
    /**
     * 初始化画布
     */
    initWrapper() {}
    /**
     * 根据时间（帧）获取同一时间的弹幕
     * @param time
     */
    initBarrageItems(time: string) {}
    /**
     * 客户端监听服务端socket回调调用，如果本地自己玩就自己选择调用时机
     * @param item
     * @param opt
     */
    addBarrageItem(item: string, opt = {}) {
        const option = Object.assign({}, this.options, opt);
        let barrageItemCreate = this.initBarrageItemDom(option);
        barrageItemCreate.innerHTML = item;
        this.itemTempDom?.appendChild(barrageItemCreate);
        this.barrageInfo = {
            width: barrageItemCreate.offsetHeight,
        };
        let duration = 0;
        if (option.speed) {
            duration = (this.eleW + this.barrageInfo.width) / option.speed;
            barrageItemCreate.style.animationDuration = `${duration}s`;
        } else {
            duration = option.duration;
        }
        barrageItemCreate.dataset.duration = `${duration}`;
        this.barrageInfo.duration = duration;
        barrageItemCreate.remove();

        let accessTrackIndex = this.getTrackIndex();
        if (accessTrackIndex == -1) {
            this.cacheQueues.push({ item, opt });
        } else {
            if (this.barrageArr[accessTrackIndex].length) {
                this.barrageArr[accessTrackIndex].push(barrageItemCreate);
            } else {
                this.barrageArr[accessTrackIndex] = [barrageItemCreate];
            }
            this.render(barrageItemCreate, accessTrackIndex);
            this.addEvent(barrageItemCreate, accessTrackIndex);
        }
    }
    /**
     * 初始化节点的事件(为每个弹幕节点绑定事件)
     * @param item
     * @param inx
     */
    addEvent(item: HTMLElement, inx: number) {
        item.addEventListener("animationstart", () => {});
        item.addEventListener("animationend", () => {
            this.barrageArr[inx] = this.barrageArr[inx].filter((item) => {
                return item.id != item.id;
            });
            if (!this.barrageArr[inx].length) {
                this.tracksArr[inx] = "free";
            }
            item.remove();
        });
    }
    /**
     * 绘制节点到屏幕上
     * @param item
     * @param inx
     */
    render(item: HTMLElement, inx: number) {
        item.dataset.trackIdx = `${inx}`;
        item.style.top = inx * this.options.trackHeight + "px";
        this.ele.appendChild(item);
        // 检测 queues
        if (this.cacheQueues.length) {
            const obj = this.cacheQueues.shift();
            // 重试
            this.addBarrageItem(obj.item, obj.opts);
        }
    }
    /**
     * 生成弹幕的dom
     * @param opt
     * @returns
     */
    initBarrageItemDom(opt: any = {}): HTMLElement {
        let { duration } = opt;
        let barrageItemDom = document.createElement("div");
        barrageItemDom.classList.add("barrageItemWrapper");
        barrageItemDom.style.animationDuration = `${duration}s`;
        return barrageItemDom;
    }
    /**
     * 生成一个暂时装载弹幕的dom，用于获取弹幕参数
     */
    initItemTempDom(): HTMLElement {
        let barrageItemTempDom = document.createElement("div");
        barrageItemTempDom.classList.add("barrageItemWrapperTemp");
        return barrageItemTempDom;
    }
    /**
     * 获取空闲跑道
     */
    getTrackIndex() {
        let readyTrackIndexArr: number[] = [];
        let resIndex = -1;
        this.tracksArr.forEach((item, idx) => {
            item == "free" && readyTrackIndexArr.push(idx);
        });
        if (readyTrackIndexArr.length) {
            let random = Math.round(readyTrackIndexArr.length * Math.random());
            resIndex = readyTrackIndexArr[random];
            this.tracksArr[resIndex] = "occupation";
            return resIndex;
        }
        for (let i = 0; i < this.barrageArr.length; i++) {
            let len = this.barrageArr[i].length;
            if (len) {
                let item = this.barrageArr[i][len - 1];
                if (item && this.checkTrack(item)) {
                    return i;
                }
            }
        }
        return resIndex;
    }
    /**
     * 检测赛道是否可加入弹幕
     * @param item
     */
    checkTrack(item: HTMLElement): boolean {
        let itemPos = item.getBoundingClientRect();
        if (itemPos.right > this.elePos?.right) {
            return false;
        }
        if (this.options.speed) {
            if (itemPos.right < this.elePos?.right) {
                return true;
            }
        } else {
            let v1 =
                (this.eleW + itemPos.width) / Number(item.dataset.duration);
            let s2 = this.eleW + this.barrageInfo.width;
            let t2 = this.barrageInfo.duration;
            let v2 = s2 / t2;
            if (v2 <= v1) {
                return true;
            } else {
                let t1 = itemPos.right - this.elePos?.left / v1;
                let t2 = this.eleW / v2;
                if (t2 < t1) {
                    return false;
                }
            }
        }
        return true;
    }
}
export default BarrageJS;
