(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');
  var sass = require('node-sass');
  var sassUtils = require('node-sass-utils')(sass);

  nx.sassGet = function(inObject, inContext) {
    var results = {};
    nx.forIn(inObject, function(sassFn, subpath) {
      results[sassFn] = function(inSassString) {
        var dotPath = inSassString.getValue();
        var path = subpath ? subpath + '.' + dotPath : dotPath;
        return sassUtils.castToSass(nx.get(inContext, path));
      };
    });
    return results;
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.sassGet;
  }
})();
