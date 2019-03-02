(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');
  var sass = require('node-sass');
  var sassUtils = require('node-sass-utils')(sass);

  nx.sassGet = function(inContext) {
    return {
      'get($inKeys)': function(inSassString) {
        var path = inSassString.getValue();
        return sassUtils.castToSass(nx.get(inContext, path));
      }
    };
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.sassGet;
  }
})();
