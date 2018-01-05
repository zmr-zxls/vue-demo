var User = function (username, password) {
  this.username = username
  this.password = password
}
var proto = User.prototype
User.checkName = function (user) {
  return user
}
proto.login = function (fn) {
  console.log(this.username + ':login...')
  fn.call(this, {flag: false})
}
proto.changePwd = function (user, pwd) {
  console.log(user.username + ':change pwd')
}
module.exports = User
