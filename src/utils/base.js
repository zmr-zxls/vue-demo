/**
 * Created by chenhaijun3 on 2017/11/8.
 */

export function oneOf (val, arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return true
    }
  }
  return false
}
export function getWindowHeight () {
  let de = document.documentElement
  return window.innerHeight || (de && de.clientHeight) || document.body.clientHeight
}
export function getWindowWidth () {
  let de = document.documentElement
  return window.innerWidth || (de && de.clientWidth) || document.body.clientWidth
}
