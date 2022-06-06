/*
 * @Author: Tom
 * @LastEditors: Tom
 * @Date: 2022-06-06 10:29:07
 * @LastEditTime: 2022-06-06 12:26:41
 * @Email: Tom
 * @FilePath: \vuex\vue3-vuex\src\utils\useMapper.js
 * @Environment: Win 10
 * @Description:
 */

import { useStore } from "vuex"
import { computed } from "vue"
export function useStateMapper(mapper, mapFn) {
  const store = useStore()

  const storeStateFns = mapFn(mapper)

  const storeState = {}

  Object.keys(storeStateFns).forEach(fnKey => {
    // vuex源码中mapState和mapGetters的方法中使用的是this.$store,所以更改this绑定
    const fn = storeStateFns[fnKey].bind({ $store: store })
    storeState[fnKey] = computed(fn)
  })

  return storeState
}

export function useActionMapper(mapper, mapFn) {
  const store = useStore()

  const storeActionsFns = mapFn(mapper)

  const storeAction = {}

  Object.keys(storeActionsFns).forEach(fnKey => {
    storeAction[fnKey] = storeActionsFns[fnKey].bind({ $store: store })
  })

  return storeAction
}
