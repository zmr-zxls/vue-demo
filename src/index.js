/**
 * Created by chenhaijun3 on 2017/12/13.
 */
import 'zui/css/zui.min.css'

import IButton from './components/button/button.vue'
import Datatable from './components/datatable'
import Icon from './components/icon/icon.vue'
import IconInput from './components/iconInput/iconInput.vue'
import IMenu from './components/menu/menu.vue'
import IMenuItem from './components/menu/menu-item.vue'
import Modal from './components/modal'
import Select from './components/select'
import Switch from './components/switch/switch.vue'

const vc = {
  IButton,
  Datatable,
  Icon,
  IconInput,
  IMenu,
  IMenuItem,
  Modal,
  Option: Select.Option,
  Select,
  ISwitch: Switch
}

const install = function (Vue, opt = {}) {
  for (let key in vc) {
    Vue.component(key, vc[key])
  }
}

if (window !== undefined && window.Vue) {
  window.Vue.use(install)
}
// 全局注册组件
export default install

