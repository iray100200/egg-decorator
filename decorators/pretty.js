module.exports = function pretty() {
  return function(target) {
    const prototypes = Object.getOwnPropertyNames(target.prototype);
    for (const a in prototypes) {
      const prototypeName = prototypes[a];
      const prototype = target.prototype[prototypeName];
      if (typeof prototype === 'function' && prototypeName !== 'constructor') {
        target.prototype[prototypeName] = async function() {
          const body = await prototype.apply(this);
          if (body instanceof Error) {
            this.ctx.body = {
              errorCode: -1,
              errorMsg: body.message,
              data: null,
              success: false,
            };
          } else {
            this.ctx.body = {
              errorCode: null,
              errorMsg: null,
              data: body,
              success: true,
            };
          }
        };
      }
    }
  };
};
