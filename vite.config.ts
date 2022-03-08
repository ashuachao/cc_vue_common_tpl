import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
const path = require("path");
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";
// bundle analyzer
import visualizer from "rollup-plugin-visualizer";

//@ts-ignore
import viteCompression from "vite-plugin-compression";
// https://vitejs.dev/config/
export default defineConfig({
    base: "./", //打包路径
    plugins: [
        vue(),
        // gzip压缩 生产环境生成 .gz 文件
        viteCompression({
            verbose: true,
            disable: false,
            threshold: 10240,
            algorithm: "gzip",
            ext: ".gz",
        }),
        AutoImport({
            // 这里除了引入 vue 以外还可以引入pinia、vue-router、vueuse等，
            // 甚至你还可以使用自定义的配置规则，见 https://github.com/antfu/unplugin-auto-import#configuration
            imports: ["vue", "vue-router", "pinia"],
            // 第三方组件库的解析器
            resolvers: [ElementPlusResolver()],
            dts: "./src/auto-imports.d.ts",
        }),
        Components({
            // dirs 指定组件所在位置，默认为 src/components
            // 可以让我们使用自己定义组件的时候免去 import 的麻烦
            dirs: ["src/components/", "src/views/", "src/icons/"],
            // 配置需要将哪些后缀类型的文件进行自动按需引入
            extensions: ["vue", "md"],
            // 解析的 UI 组件库，这里以 Element Plus 和 Ant Design Vue 为例
            resolvers: [ElementPlusResolver()],
            dts: "./src/components.d.ts",
        }),
        createSvgIconsPlugin({
            // config svg dir that can config multi
            iconDirs: [path.resolve(process.cwd(), "src/assets/icons")],
            // appoint svg icon using mode
            symbolId: "icon-[dir]-[name]",
        }),
        visualizer({
            open: true,
            gzipSize: true,
            brotliSize: true,
        }),
    ],
    // 配置别名
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src"),
            // tsType保存typescript定义文件
            tsType: path.resolve(__dirname, "typings"),
            // // component文件夹保存业务公共组件（svg、chart）,view页面需要引入
            // component: path.resolve(__dirname, "src/components"),
            // // view文件夹保存页面路由对应文件（可视作树形结构）
            // view: path.resolve(__dirname, "src/views"),
            // // styles文件夹保存页面公共的一些css引用
            // style: path.resolve(__dirname, "src/styles"),
            // // helper保存项目中的公共封装函数和业务函数
            // helper: path.resolve(__dirname, "src/helpers"),
        },
    },
    css: {
        preprocessorOptions: {
            scss: {
                // additionalData: '@import "@/assets/style/mian.scss";',
            },
        },
    },
    //启动服务配置
    server: {
        host: "0.0.0.0",
        port: 8000,
        open: true,
        https: false,
        proxy: {},
        cors: true,
    },
    // 生产环境打包配置
    //去除 console debugger
    build: {
        minify: "terser",
        // 打包大小超过警告
        chunkSizeWarningLimit: 500,
        terserOptions: {
            compress: {
                drop_console: true,
                drop_debugger: true,
            },
        },
        cssCodeSplit: false,
    },
});
