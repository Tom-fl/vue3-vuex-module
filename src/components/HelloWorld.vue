<!--
 * @Author: Tom
 * @LastEditors: Tom
 * @Date: 2022-05-30 10:14:54
 * @LastEditTime: 2022-06-06 17:03:55
 * @Email: Tom
 * @FilePath: \vuex\vue3-vuex\src\components\HelloWorld.vue
 * @Environment: Win 10
 * @Description: 
-->
<template>
  <div>state:{{ obj }}</div>
  <div>getters{{ getObj }}</div>
</template>

<script>
import { useStore } from "vuex"

import { useState } from "@/utils/useState"
import { useGetters } from "@/utils/useGetters"
import { useMutations } from "@/utils/useMutations"
import { useActions } from "@/utils/useActions"

export default {
  setup() {
    // console.log(store.state.name)
    // console.log(store.getters.getName)

    // const stateStore = mapState(["name"])
    // console.log(mapState)
    // console.log(stateStore.name)

    const storeState = useState("hello", ["obj"])
    const storeGetters = useGetters("hello", ["getObj"])
    const storeMutations = useMutations("hello", ["CHANGE_OBJ"])
    const storeActions = useActions("hello", ["actObj"])

    storeActions.actObj({ params: "xxx" }).then(res => {
      console.log(res)
    })

    let changeVal = {
      name: "盲仔",
      age: 22,
    }
    storeMutations.CHANGE_OBJ(changeVal)
    return {
      ...storeState,
      ...storeGetters,
    }
  },
}
</script>
