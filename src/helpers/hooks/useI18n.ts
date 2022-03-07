// 根据定义文件返回响应的locale
import { useI18n } from "vue-i18n";
interface srcType {
    src: any;
    property?: string;
    route: string;
}
export default function (srcOpt: srcType) {
    const { t, te } = useI18n({ useScope: "global" });
    const generateTitle = (tag: string, title: string) => {
        let hasKey = te(`${tag}.${title}`);
        if (hasKey) {
            return t(`${tag}.${title}`);
        }
        return title;
    };
    let result;
    if (typeof srcOpt.src == "string") {
        result = computed(() => {
            return generateTitle(srcOpt.route, srcOpt.src);
        });
    } else if (Array.isArray(srcOpt.src)) {
        result = computed(() => {
            return srcOpt.src.map((i: any) =>
                Object.assign(i, {
                    label: generateTitle(
                        srcOpt.route,
                        i[srcOpt.property as string]
                    ),
                })
            );
        });
    }
    return result;
}
