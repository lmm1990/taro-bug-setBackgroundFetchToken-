import { createApp } from 'vue'
import Taro from '@tarojs/taro'
import './app.scss'

const App = createApp({
  onShow (options) {
    Taro.setBackgroundFetchToken({
			token: "sssd"
		})
  },
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
})

export default App
