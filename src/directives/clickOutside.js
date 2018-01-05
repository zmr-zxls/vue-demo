/**
 * Created by chenhaijun3 on 2017/12/14.
 */
// 监听鼠标是否点击在元素的外面
export default {
  bind (ele, binding, vnode) {
    let documentHandler = function (evt) {
      if (ele.contains(evt.target)) {
        return false
      }
      if (binding.expression) {
        binding.value(evt)
      }
    }
    ele.__vueClickOutside__ = documentHandler
    document.addEventListener('click', documentHandler)
  },
  unbind (ele, binding) {
    document.removeEventListener('click', ele.__vueClickOutside__)
    delete ele.__vueClickOutside__
  }
}
