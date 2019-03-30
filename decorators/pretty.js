module.exports = function pretty() {
  return function (target) {
    let prototypes = Object.getOwnPropertyNames(target.prototype)
    for (var a in prototypes) {
      let prototypeName = prototypes[a]
      let prototype = target.prototype[prototypeName]
      if (typeof prototype === 'function' && prototypeName !== 'constructor') {
        target.prototype[prototypeName] = async function () {
          const body = await prototype.apply(this)
          if (body instanceof Error) {
            this.ctx.body = {
              errorCode: -1,
              errorMsg: body.message,
              data: null,
              success: false
            }
          } else {
            this.ctx.body = {
              errorCode: null,
              errorMsg: null,
              data: body,
              success: true
            }
          }
        }
      }
    }
  }
}