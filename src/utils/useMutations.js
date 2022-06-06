/*
 * @Author: Tom
 * @LastEditors: Tom
 * @Date: 2022-06-06 16:52:46
 * @LastEditTime: 2022-06-06 17:04:57
 * @Email: Tom
 * @FilePath: \vuex\vue3-vuex\src\utils\useMutations.js
 * @Environment: Win 10
 * @Description:
 */
import { mapMutations, createNamespacedHelpers } from "vuex"
import { useActionMapper } from "./useMapper"
import { checkType } from "./index"

export function useMutations(moduleName, mapper) {
  let mapperFn = mapMutations

  // 如果使用模块化，则使用vuex提供的createNamespacedHelpers方法找到对应模块的mapMutations方法
  if (checkType(moduleName) === "[object String]" && moduleName.length > 0) {
    mapperFn = createNamespacedHelpers(moduleName).mapMutations
  }

  return useActionMapper(mapper, mapperFn)
}
