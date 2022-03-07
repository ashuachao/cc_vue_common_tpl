// src/store/index.ts

import { defineStore } from "pinia";

// 定义store, myFirstStore是store的名称，该名称必须唯一，不可重复
export const useStore = defineStore("myFirstStore", {
    state: () => {
        return {
            count: 0,
            name: "foo",
            list: [1, 2, 3],
        };
    },
    actions: {
        changeCount() {
            this.count++;
        },
        async changeName() {
            const newName: any = await new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve("names");
                }, 1000);
            }).catch((err) => {
                console.log(err);
            });
            this.name = newName;
        },
    },
});
