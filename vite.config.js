/*
 * @Author: Tom
 * @LastEditors: Tom
 * @Date: 2022-05-30 10:14:54
 * @LastEditTime: 2022-06-06 10:32:15
 * @Email: Tom
 * @FilePath: \vuex\vue3-vuex\vite.config.js
 * @Environment: Win 10
 * @Description:
 */

import { defineConfig } from "vite"
import { resolve } from "path"
import vue from "@vitejs/plugin-vue"

export default defineConfig({
  resolve: {
    alias: [
      { find: "@", replacement: resolve(__dirname, "src") },
      { find: /^~/, replacement: "" },
    ],
  },

  plugins: [vue()],
})
