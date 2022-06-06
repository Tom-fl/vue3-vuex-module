/*
 * @Author: Tom
 * @LastEditors: Tom
 * @Date: 2022-06-01 12:19:48
 * @LastEditTime: 2022-06-06 12:54:18
 * @Email: Tom
 * @FilePath: \vuex\vue3-vuex\src\store\index.js
 * @Environment: Win 10
 * @Description:
 */
import { createStore } from "vuex"

const files = import.meta.globEager("./module/*.js")

const modules = {}

for (const key in files) {
  if (Object.prototype.hasOwnProperty.call(files, key)) {
    modules[key.replace(/(\.\/\module\/|\.js)/g, "")] = files[key].default
  }
}

// createStore 创建vuex
const store = createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules,
})

export default store
