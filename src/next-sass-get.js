(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');
  var sass = require('node-sass');
  var sassUtils = require('node-sass-utils')(sass);

  var NxSassGet = nx.declare('nx.SassGet', {
    statics: {
      create: function(inContext) {
        var self = this;
        return {
          'get($inKeys)': function(inSassString) {
            return self.get(inContext, inSassString);
          }
        };
      },
      get: function(inContext, inSassString) {
        var path = inSassString.getValue();
        return sassUtils.castToSass(nx.get(inContext, path));
      }
    }
  });

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxSassGet;
  }
})();
