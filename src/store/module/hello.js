/*
 * @Author: Tom
 * @LastEditors: Tom
 * @Date: 2022-06-06 12:37:45
 * @LastEditTime: 2022-06-06 16:27:40
 * @Email: Tom
 * @FilePath: \vuex\vue3-vuex\src\store\module\hello.js
 * @Environment: Win 10
 * @Description:
 */

const hello = {
  namespaced: true,
  state: {
    obj: {},
  },
  getters: {
    getObj: ({ obj }) => obj,
  },
  mutations: {
    CHANGE_OBJ(state, payload) {
      state.obj = payload
    },
  },
  actions: {
    async actObj({ commit }, payload) {
      let data = {
        name: "亚索",
        age: 12,
      }
      if (data) commit("CHANGE_OBJ", data)
      return data
    },
  },
}
export default hello
