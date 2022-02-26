// 根据定义文件返回响应的locale
import { useI18n } from "vue-i18n";
export default function () {
    const { t, te } = useI18n({ useScope: "global" });
    const generateTitle = (title: string) => {
        let hasKey = te(title);
        if (hasKey) {
            return t(title);
        }
        return title;
    };

    return {
        generateTitle,
    };
}
