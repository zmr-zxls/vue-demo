/**
 * Created by chenhaijun3 on 2017/11/15.
 */
export default {
  methods: {
    jump (path) {
      if (this.$router) {
        this.$router.push(path)
      }
    }
  }
}

export function debounce (fn) {
  let waiting;
  return function () {
    if (waiting) return;
    waiting = true;
    const context = this,
      args = arguments;
    const later = function () {
      waiting = false;
      fn.apply(context, args);
    };
    this.$nextTick(later);
  };
}
