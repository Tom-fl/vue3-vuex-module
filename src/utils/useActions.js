/*
 * @Author: Tom
 * @LastEditors: Tom
 * @Date: 2022-06-06 10:30:39
 * @LastEditTime: 2022-06-06 17:04:55
 * @Email: Tom
 * @FilePath: \vuex\vue3-vuex\src\utils\useActions.js
 * @Environment: Win 10
 * @Description:
 */
import { mapActions, createNamespacedHelpers } from "vuex"
import { useActionMapper } from "./useMapper"
import { checkType } from "./index"
/**
 *
 * @param {*} moduleName 模块名称
 * @param {*} mapper 方法名集合 ['fn1', 'fn2']
 * @returns
 */
export function useActions(moduleName, mapper) {
  let mapperFn = mapActions

  // 如果使用模块化，则使用vuex提供的createNamespacedHelpers方法找到对应模块的mapActions方法
  if (checkType(moduleName) === "[object String]" && moduleName.length > 0) {
    mapperFn = createNamespacedHelpers(moduleName).mapActions
  }

  return useActionMapper(mapper, mapperFn)
}
