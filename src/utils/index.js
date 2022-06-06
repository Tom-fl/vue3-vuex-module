/*
 * @Author: Tom
 * @LastEditors: Tom
 * @Date: 2022-06-06 10:34:19
 * @LastEditTime: 2022-06-06 10:34:23
 * @Email: Tom
 * @FilePath: \vuex\vue3-vuex\src\utils\index.js
 * @Environment: Win 10
 * @Description:
 */
export function checkType(data) {
  return Object.prototype.toString.call(data)
}
