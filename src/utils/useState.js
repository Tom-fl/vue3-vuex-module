/*
 * @Author: Tom
 * @LastEditors: Tom
 * @Date: 2022-06-05 14:50:19
 * @LastEditTime: 2022-06-06 17:04:51
 * @Email: Tom
 * @FilePath: \vuex\vue3-vuex\src\utils\useState.js
 * @Environment: Win 10
 * @Description:
 */

import { mapState, createNamespacedHelpers } from "vuex"
import { useStateMapper } from "./useMapper"
import { checkType } from "./index"
/**
 *
 * @param {*} moduleName 模块名称
 * @param {*} mapper state属性集合 ['name', 'age']
 * @returns
 */
export function useState(moduleName, mapper) {
  let mapperFn = mapState

  // 如果使用模块化，则使用vuex提供的createNamespacedHelpers方法找到对应模块的mapState方法
  if (checkType(moduleName) === "[object String]" && moduleName.length > 0) {
    mapperFn = createNamespacedHelpers(moduleName).mapState
  }

  return useStateMapper(mapper, mapperFn)
}