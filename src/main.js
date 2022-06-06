/*
 * @Author: Tom
 * @LastEditors: Tom
 * @Date: 2022-05-30 10:14:54
 * @LastEditTime: 2022-06-01 12:23:26
 * @Email: Tom
 * @FilePath: \vue3-vuex\src\main.js
 * @Environment: Win 10
 * @Description:
 */
import { createApp } from "vue"
import App from "./App.vue"
import store from "./store"

createApp(App).use(store).mount("#app")
